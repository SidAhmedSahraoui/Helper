import React, { useEffect } from "react";
import useStyles from "./posts-jss";
import Post from "../../layouts/PostCard";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
// Actions
import { getUserPosts } from "../../../redux/actions/postActions";
// Layouts
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
      <div className={classes.posts}>
        {(posts === null || posts.length === 0 || loading) ? (
          <NotFound />
        ) : (
          posts.map((post) => (
            <Post
              key={uuid()}
              id={post.id}
              title={post.title}
              content={post.content}
              category={post.category}
              city={post.willaya}
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
