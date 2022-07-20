import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./Post-jss";
import { connect } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCoins,
  faUserDoctor,
  faPhone,
  faPaperPlane,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
// Actions 
import { deletePost } from "../../../redux/actions/postActions"

const Post = (props) => {
  const classes = useStyles();
  const { id, title, content, category, city, presentation, deletable, deletePost } = props;
  
  const onDelete = async (e) => {
    e.preventDefault()
    await deletePost(id);
  }
  return (
    <div className={classes.post}>
      <div className="head">
        <h2 className="title">{title} </h2>
        <FontAwesomeIcon
          icon={
            category === "Medical"
              ? faUserDoctor
              : category === "Education"
              ? faGraduationCap
              : faCoins
          }
          size="sm"
          className="icon"
        />
      </div>
      <div className="position">
        <FontAwesomeIcon icon={faLocationDot} /> {city}
      </div>
      <div className="core">
        <p className="content">{content}</p>
      </div>
      {presentation ? null : (
        <div className="contact">
          <div className="call">
            <h3>Call</h3>
            <FontAwesomeIcon className="icon" icon={faPhone} size="lg" />
          </div>
          <Link to={`/${id}`} className="call msg">
            <h3>Message</h3>
            <FontAwesomeIcon className="icon" icon={faPaperPlane} size="lg" />
          </Link>
        </div>
      )}
      {deletable ? (
        <Button onClick={onDelete} variant="primary">Delete</Button>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => ({
  error : state.post.error
})
export default connect(mapStateToProps, {deletePost}) (Post);
