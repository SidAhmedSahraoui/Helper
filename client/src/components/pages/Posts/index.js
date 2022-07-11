import React, { useEffect } from "react";
import useStyles from "./posts-jss";
import Post from "../../layouts/PostCard";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { getPosts } from "../../../redux/actions/postActions";
// Layouts
import NotFound from "../404";

const Posts = (props) => {
  const { posts, error, loading, getPosts } = props;

  const classes = useStyles();

  useEffect(() => {
    getPosts();
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
  posts: state.post.posts,
  loading: state.post.loading,
  error: state.post.error,
});
export default connect(mapStateToProps, { getPosts })(Posts);
