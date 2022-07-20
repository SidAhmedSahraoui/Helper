import React, { useState, useEffect } from "react";
import useStyles from "./AddPost-jss";
import { connect } from "react-redux";
import { Container, Card } from "@mui/material";
import { Helmet } from "react-helmet";
// Actions
import { loadUser } from "../../../redux/actions/authActions";
import { addPost } from "../../../redux/actions/postActions";

// Layouts
import Alert from "../../layouts/Alert/Alert";
import Spinner from "../../layouts/Spinner";

const AddPost = (props) => {
  const { user, loadUser, loading_add_post, addPost } = props;

  const classes = useStyles();

  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "Medical",
  });

  const { title, content, category } = post;

  const [err, setErr] = useState({
    type: "",
    msg: "",
  });

  const user_id = user._id;
  const willaya = user.willaya;
  const phone = user.phone;
  const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      setErr({
        msg: "Please fill out all fields",
        type: "danger",
      });
    } else {
      setErr({ msg: "Post uploaded", type: "success" });
      await addPost({ user_id, title, content, category, willaya, phone });
    }
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Helmet>
        <title>Helper | Add Post</title>
      </Helmet>
      <div className={classes.AddPost}>
        {err.msg === "" ? null : (
          <Container style={{ marginBottom: "12px" }}>
            <Alert type={err.type} severity="error">
              {err.msg}
            </Alert>
          </Container>
        )}
        <Card className="form">
        <form  onSubmit={onSubmit}>
          <h3 className="title">Add a new help request</h3>
          <div className="from-group">
            <input
              type="text"
              name="title"
              className="text-input"
              placeholder="Title"
              value={title}
              onChange={onChange}
            />
          </div>
          <div className="from-group">
            <textarea
              name="content"
              className="text-input"
              placeholder="Description"
              value={content}
              onChange={onChange}
            />
          </div>
          <div className="from-group">
            <select
              name="category"
              value={category}
              className="select-input"
              onChange={onChange}>
              <option value="Medical">Medical</option>
              <option value="Education">Education</option>
              <option value="Financial">Financial</option>
            </select>
          </div>
          <div className="from-group">
            {loading_add_post ? (
              <Spinner />
            ) : (
              <input className="button" type="submit" value="Submit" />
            )}
          </div>
        </form>
        </Card>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading_add_post: state.post.loading_add_post,
});
export default connect(mapStateToProps, { loadUser, addPost })(AddPost);
