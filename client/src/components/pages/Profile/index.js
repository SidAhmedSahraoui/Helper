import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, CardContent, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeCircleCheck,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import useStyles from "./profile-jss";

// Actions
import { loadUser } from "../../../redux/actions/authActions";

// Layouts
import Spinner from "../../layouts/Spinner";

const Profile = (props) => {
  const { user, isAuthenticated, loading, loadUser } = props;
  const classes = useStyles();

  const [settings, setSettings] = useState({
    name: "",
    phone: "",
    willaya: "",
  });
  const { name, phone, willaya } = settings;
  const onChange = (e) =>
    setSettings({ ...settings, [e.target.name]: e.target.value });

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={classes.profile}>
      {isAuthenticated && user ? (
        <div className="user">
          <h3 className="welcome">
            {" "}
            Welcome {user.username} <span>👋</span>{" "}
          </h3>
          <h5 className="email">
            {" "}
            <FontAwesomeIcon icon={faEnvelopeCircleCheck} /> {user.email}{" "}
            <FontAwesomeIcon icon={faPhone} /> {user.phone}{" "}
          </h5>
          <div className="edit">
            <Card style={{ maxWidth: "500px", padding: "1rem" }}>
              <CardContent>
                <Typography variant="h5" style={{ marginBottom: "24px" }}>
                  Edit your settings
                </Typography>
                <form className="form" onSubmit={onChange}>
                  <input
                    className="text-input"
                    placeholder="Name"
                    type="text"
                    name="name"
                    onChange={onChange}
                    value={name}
                  />

                  <input
                    className="text-input"
                    placeholder="Phone"
                    type="number"
                    name="phone"
                    onChange={onChange}
                    value={phone}
                  />

                  <select
                    className="select"
                    name="willaya"
                    onChange={onChange}
                    value={willaya}>
                    <option value="Adrar">Adrar</option>
                  </select>
                  {loading ? (
                    <Spinner />
                  ) : (
                    <input className="button" type="submit" value="Submit" />
                  )}
                </form>
              </CardContent>
            </Card>
            <Card style={{ maxWidth: "500px", padding: "1rem" }}>
              <CardContent>
                <Typography variant="h5" style={{ marginBottom: "24px" }}>
                  Edit your password
                </Typography>
                <form className="form" onSubmit={onChange}>
                  <input
                    className="text-input"
                    placeholder="Old Password"
                    type="password"
                    name="password1"
                    onChange={onChange}
                    value={name}
                  />
                  <input
                    className="text-input"
                    placeholder="New Password"
                    type="password"
                    name="password2"
                    onChange={onChange}
                    value={phone}
                  />
                  {loading ? (
                    <Spinner />
                  ) : (
                    <input className="button" type="submit" value="Submit" />
                  )}{" "}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, { loadUser })(Profile);
