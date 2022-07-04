import React, { useState, useEffect } from "react";
import useStyles from './profile-jss'
// Actions 
//import { loadUser } from '../../../redux/actions/authActions';

const Profile = (props) => {
  //const { user, isAuthenticated, loadUser } = props;
  useEffect(() => {
    //loadUser()
    // eslint-disable-next-line
  }, [])
  
    const classes = useStyles();

  const [post, setPost] = useState({
    title: "",
    description: "",
    category: "Medical",
  });
  const { title, description, category } = post;
  const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(post);
  };
  return (
    <div className={classes.profile} >
     { /*isAuthenticated ? ( <div className="user">
        <h1> Welcome { user && user.username} </h1> 
        <h3> {user && user.email} </h3>
  </div>) : null*/}
    <form className="form" onSubmit={onSubmit}>
      <h3 className="title">Add a new help request</h3>
      <div className="from-group">
        <input
          type="text"
          name="title"
          className="text-input"
          placeholder="Title"
          value={title}
          onChange={onChange}
          required
        />
      </div>
      <div className="from-group">
        <textarea
          name="description"
          className="text-input"
          placeholder="Description"
          value={description}
          onChange={onChange}
          required
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

export default Profile;