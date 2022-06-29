import React from "react";
import useStyles from "./Post-jss";
import { Card } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCoins,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";
const Post = (props) => {
  const classes = useStyles();
  const { id, title, content, category, city, createdAt } = props;

  return (
    <Card className={classes.post}>
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
      <div className="core">
        <p className="content">{content}</p>
      </div>
      <h1>{city}</h1>
      <h1>{createdAt}</h1>
      <h1>{id}</h1>
    </Card>
  );
};
export default Post;
