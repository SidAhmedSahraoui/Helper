import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import useStyles from "./auth-jss";
// Actions
import { register, clearErrors } from "../../redux/actions/authActions";
import Spinner from "../layouts/Spinner";
import Alert from "../layouts/Alert/Alert";

const Register = (props) => {
  const { isAuthenticated, loading, error, register, clearErrors } = props;

  const classes = useStyles();

  useEffect(() => {
    clearErrors();
  }, [isAuthenticated, clearErrors]);

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const [err, setErr] = useState('')

  const { username, email, phone, password, password2 } = user;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setErr("Passwords do not match");
      console.log(err)
    } else if (password.length<6) {
      setErr("Password must be at least 6 characters")
      console.log(err)
    } else {
      setErr('')
      await register({ username, email, phone, password });
    }
  };
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <Helmet>
        <title>Helper | Register</title>
      </Helmet>
      <Card className={`${classes.auth} card-shadow text-center`}>
        {(err || error) && <Alert severity="error">{err || error}</Alert>}
        <h3 className="title">Sign Up</h3>
        <h6 className="subtitle">Start helping others or getting help.</h6>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="text-input"
              name="username"
              value={username}
              placeholder="Username"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="text-input"
              name="email"
              value={email}
              placeholder="Email"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="text-input"
              name="phone"
              value={phone}
              placeholder="Phone"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="text-input"
              name="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="text-input"
              name="password2"
              value={password2}
              placeholder="Password Confirmation"
              onChange={onChange}
              required
            />
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <input
                type="submit"
                value="Register"
                className="button-primary"
              />
              <Link to="/login" className="link-primary">
                {" "}
                Have an account?
              </Link>
            </>
          )}
        </form>
      </Card>
    </>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  error: state.auth.error,
});

export default connect(mapStateToProps, { register, clearErrors })(Register);
