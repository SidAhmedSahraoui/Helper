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
import { TableRow } from '@mui/material'
const Post = (props) => {
  const classes = useStyles();
  const { title, content, category } = props;

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
      <FontAwesomeIcon icon={faLocationDot}/> Relizane
      </div>
      <div className="core">
        <p className="content">{content}</p>
      </div>
      <div className="contact">
        <TableRow className="call">
          <h3>Call</h3>
          <FontAwesomeIcon icon={faPhone} size='lg' />
        </TableRow>
        <div className="call msg">
          <h3>Message</h3>
          <FontAwesomeIcon icon={faPaperPlane} size='lg' />
        </div>
      </div>
    </div>
  );
};
export default Post;
