import React from "react";
import useStyles from "./Post-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCoins,
  faUserDoctor,
  faPhone,
  faPaperPlane,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";

const Post = (props) => {
  const classes = useStyles();
  const { title, content, category, city } = props;

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
      <FontAwesomeIcon icon={faLocationDot}/> {city}
      </div>
      <div className="core">
        <p className="content">{content}</p>
      </div>
      <div className="contact">
        <div className="call">
          <h3>Call</h3>
          <FontAwesomeIcon className="icon" icon={faPhone} size='lg' />
        </div>
        <div className="call msg">
          <h3>Message</h3>
          <FontAwesomeIcon className="icon" icon={faPaperPlane} size='lg' />
        </div>
      </div>
    </div>
  );
};
export default Post;
