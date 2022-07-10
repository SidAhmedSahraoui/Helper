import React, { useState, useEffect } from "react";
import useStyles from "./AddPost-jss";
import { connect } from "react-redux";
import { Container } from "@mui/material";

// Actions
import { loadUser } from "../../../redux/actions/authActions";
// Layouts
import Alert from "../../layouts/Alert/Alert";

const AddPost = (props) => {
  const { user, isAuthenticated, loading, loadUser } = props;

  const classes = useStyles();

  const [post, setPost] = useState({
    title: "",
    description: "",
    category: "Medical",
  });

  const { title, description, category } = post;

  const [err, setErr] = useState({
    type: "",
    msg: "",
  });

  const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      setErr({
        msg: "Please fill out all fields",
        type: "success",
      });
    } else {
      
    }
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.AddPost}>
      <form className="form" onSubmit={onSubmit}>
        <h3 className="title">Add a new help request</h3>
        <div className="from-group">
        <Container className="alert-container">
            {err.msg === "" ? null : (
              <Alert type={err.type} severity="error">
                {err.msg}
              </Alert>
            )}
          </Container>
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
            name="description"
            className="text-input"
            placeholder="Description"
            value={description}
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
          <input type="submit" value="Add Request" className="button-outline" />
        </div>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAthenticated: state.auth.isAthenticated,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, { loadUser })(AddPost);
