import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Card, CardContent, Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeCircleCheck,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import useStyles from "./profile-jss";

// Actions
import { loadUser } from "../../../redux/actions/authActions";
import {
  updatePassword,
  updateProfile,
} from "../../../redux/actions/authActions";

// Layouts
import Spinner from "../../layouts/Spinner";
import Alert from "../../layouts/Alert/Alert";

const Profile = (props) => {
  const {
    user,
    isAuthenticated,
    loading,
    loadUser,
    updatePassword,
    updateProfile,
  } = props;
  const classes = useStyles();

  const [settings, setSettings] = useState({
    name: "",
    phone: "",
    willaya: "",
    old_password: "",
    new_password: "",
  });
  const { name, phone, willaya, old_password, new_password } = settings;

  const [err, setErr] = useState({
    type: "",
    msg: "",
  });

  const onChange = (e) =>
    setSettings({ ...settings, [e.target.name]: e.target.value });

  const onSubmit_settings = async (e) => {
    e.preventDefault();
    if (name === "" || phone === "") {
      setErr({ msg: "Please fill out all fields", type: "danger" });
    } else {
      setErr({ msg: "Profile updated", type: "success" });
      await updateProfile({ name, phone, willaya });
    }
  };
  const onSubmit_password = async (e) => {
    e.preventDefault();
    if (old_password.length < 6 || new_password.length < 6) {
      setErr({
        msg: "Password must be at least 6 characters",
        type: "danger",
      });
    } else if (old_password === new_password) {
      setErr({ msg: "Passwords looks the same!", type: "danger" });
    } else {
      setErr({ msg: "Password updated", type: "success" });
      await updatePassword({ old_password, new_password });
    }
  };
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
            Welcome {user.name || user.username} <span>👋</span>{" "}
          </h3>
          <h5 className="email">
            {" "}
            <div className="element">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} /> {user.email}{" "}
            </div>
            <div className="element">
              <FontAwesomeIcon icon={faPhone} /> {user.phone}{" "}
            </div>
            <div className="element">
              <FontAwesomeIcon icon={faLocationDot} /> {user.willaya}{" "}
            </div>
          </h5>
          <Container className="alert-container">
            {err.msg === "" ? null : (
              <Alert type={err.type} severity="error">
                {err.msg}
              </Alert>
            )}
          </Container>
          <div className="edit">
            <Card style={{ padding: "1rem" }}>
              <CardContent>
                <Typography variant="h5" style={{ marginBottom: "24px" }}>
                  Edit your settings
                </Typography>
                <form className="form" onSubmit={onSubmit_settings}>
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
                    <option key={0} value="">
                      All Willayas
                    </option>
                    <option key={1} value="Algies">
                      Algies
                    </option>
                    <option key={2} value="Oran">
                      Oran
                    </option>
                    <option key={3} value="Mascara">
                      Mascara
                    </option>
                    <option key={4} value="Annaba">
                      Annaba
                    </option>
                    <option key={5} value="Sidi-Bel-Abbes">
                      Sidi-Bel-Abbes
                    </option>
                    <option key={6} value="Constantine">
                      Constantine
                    </option>
                  </select>

                  {loading ? (
                    <Spinner />
                  ) : (
                    <input className="button" type="submit" value="Submit" />
                  )}
                </form>
              </CardContent>
            </Card>
            <Card style={{ padding: "1rem" }}>
              <CardContent>
                <Typography variant="h5" style={{ marginBottom: "24px" }}>
                  Edit your password
                </Typography>
                <form className="form" onSubmit={onSubmit_password}>
                  <input
                    className="text-input"
                    placeholder="Old Password"
                    type="password"
                    name="old_password"
                    onChange={onChange}
                    value={old_password}
                  />
                  <input
                    className="text-input"
                    placeholder="New Password"
                    type="password"
                    name="new_password"
                    onChange={onChange}
                    value={new_password}
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
export default connect(mapStateToProps, {
  loadUser,
  updatePassword,
  updateProfile,
})(Profile);
