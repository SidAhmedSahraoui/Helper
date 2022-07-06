import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import useStyles from "./profile-jss";
// Actions
import { loadUser } from "../../../redux/actions/authActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeCircleCheck,
  faMobilePhone,
} from "@fortawesome/free-solid-svg-icons";
// Layouts
import Spinner from "../../layouts/Spinner";

const Profile = (props) => {
  const { user, isAuthenticated, loading, loadUser } = props;
  const classes = useStyles();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.profile}>
      {isAuthenticated && user  ? (
        <div className="user">
          <h3>
            {" "}
            Welcome <span>👋</span> {user.username}{" "}
          </h3>
          <h5>
            {" "}
            <FontAwesomeIcon icon={faEnvelopeCircleCheck} />{" "}
            {user.email}{" "}
          </h5>
          <p>
            {" "}
            <FontAwesomeIcon icon={faMobilePhone} /> {user.phone}{" "}
          </p>
        </div>
      ) : <Spinner />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, { loadUser })(Profile);
