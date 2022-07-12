import React from "react";
import useStyles from "./Message-jss";

const Message = (props) => {
  const classes = useStyles();
  const { sender, post, content } = props;

  return (
    <div className={classes.message}>
      <div className="head">
        <h3 className="title">{sender} <span>replied to</span> {post} </h3>
      </div>
   
      <div className="core">
        <p className="content">{content}</p>
      </div>
      
        
    </div>
  );
};
export default Message;
