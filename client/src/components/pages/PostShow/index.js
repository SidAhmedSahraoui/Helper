import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import useStyles from "./postShow-jss";
import { Container } from "@mui/system";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
// Layouts
import Post from "../../layouts/PostCard";
import Alert from "../../layouts/Alert/Alert";

// Actions
import { getPostById } from "../../../redux/actions/postActions";
import { sendMessage } from "../../../redux/actions/messageActions";

const PostShow = (props) => {
  const { isAuthenticated, post, msg, loading, getPostById, sendMessage } =
    props;

  const params = useParams();

  const [message, setMessage] = useState({
    content: "",
    post_id: "",
  });

  const { content, post_id } = message;
  const classes = useStyles();

  const [err, setErr] = useState({
    type: "",
    msg: "",
  });

  const onChange = (e) =>
    setMessage({ ...message, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (content === "" || post_id === "") {
      setErr({
        msg: "Please fill out all fields",
        type: "danger",
      });
    } else {
      await sendMessage({ post_id, content });
      setErr({ msg: msg || "Message sent", type: "success" });
    }
  };

  useEffect(() => {
    getPostById(params.id);
    setMessage({ ...message, post_id: params.id });
    // eslint-disable-next-line
  }, [post_id]);

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <Helmet>
        <title>Helper | Post</title>
      </Helmet>
      <div className={classes.postShow}>
        {err.msg === "" ? null : (
          <Container style={{ marginBottom: "12px", width: "50%" }}>
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
              <h3>Drop Message</h3>
              <textarea
                name="content"
                className="text-input"
                placeholder="Message..."
                onChange={onChange}
                value={content}
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
  isAuthenticated: state.auth.isAuthenticated,
  post: state.post.post,
  msg: state.message.message,
  loading: state.post.loading_posts,
});
export default connect(mapStateToProps, { getPostById, sendMessage })(PostShow);
