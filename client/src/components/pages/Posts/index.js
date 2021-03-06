import React, { useEffect } from "react";
import useStyles from "./posts-jss";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
// Actions
import { getUserPosts } from "../../../redux/actions/postActions";

// Layouts
import Post from "../../layouts/PostCard";
import NotFound from "../404";

const Posts = (props) => {
  const { posts, loading, getUserPosts } = props;

  const classes = useStyles();

  useEffect(() => {
    getUserPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Helmet>
        <title>Helper | Posts</title>
      </Helmet>
      <div className={classes.posts}>
        {posts === null || posts.length === 0 || loading ? (
          <NotFound />
        ) : (
          posts.map((post) => (
            <Post
              key={uuid()}
              id={post._id}
              title={post.title}
              content={post.content}
              category={post.category}
              city={post.willaya}
              presentation={true}
              deletable={true}
            />
          ))
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  posts: state.post.user_posts,
  loading: state.post.loading,
});
export default connect(mapStateToProps, { getUserPosts })(Posts);
