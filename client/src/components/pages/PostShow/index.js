import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import useStyles from "./postShow-jss";
import { Container } from "@mui/system";
// Layouts
import Post from "../../layouts/PostCard";
import Alert from "../../layouts/Alert/Alert";
// Actions
import { getPostById } from "../../../redux/actions/postActions";

const PostShow = (props) => {
  const { post, loading, getPostById } = props;

  const [message, setMessage] = useState({
    core: "",
    sender: "",
    receiver: "",
  });

  const { core, sender, receiver } = message;
  const classes = useStyles();

  const [err, setErr] = useState({
    type: "",
    msg: "",
  });

  const onChange = (e) =>
    setMessage({ ...message, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (core === "") {
      setErr({
        msg: "Please fill out all fields",
        type: "danger",
      });
    } else {
      setErr({ msg: "Message sent", type: "success" });
      // await addPost({ user_id, title, content, category, willaya, phone });
    }
  };

  useEffect(() => {
    getPostById("62cc49b9621d8236681e8893");

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={classes.postShow}>
      {err.msg === "" ? null : (
        <Container style={{ marginBottom: "12px", width: '50%' }}>
          <Alert type={err.type} severity="error">
            {err.msg}
          </Alert>
        </Container>
      )}
        <div className="main">
        <div className="post">
          {post === null || loading ? null : (
            <Post
              title={post.title}
              content={post.content}
              category={post.category}
              city={post.willaya}
              presentation={true}
            />
          )}
        </div>
        <div className="message">
          <form className="form" onSubmit={onSubmit}>
            <textarea
              name="core"
              className="text-input"
              placeholder="Message..."
              onChange={onChange}
              value={core}
            />{" "}
            <input className="button" type="submit" value="Send" />
          </form>
        </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  post: state.post.post,
  loading: state.post.loading_posts,
});
export default connect(mapStateToProps, { getPostById })(PostShow);
