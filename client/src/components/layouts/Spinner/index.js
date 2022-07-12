import React from "react";
import useStyles from "./spinner-jss";
const Spinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.spinner}>
      <div className="el el1"></div>
      <div className="el el2"></div>
      <div className="el el3"></div>
      <div className="el el4"></div>
      <div className="el el5"></div>
      <div className="el el6"></div>
      <div className="el el7"></div>
      <div className="el el8"></div>
      <div className="el el9"></div>
    </div>
  );
};

export default Spinner;
