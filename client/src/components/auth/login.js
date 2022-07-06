import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Card } from "@mui/material";
import { connect } from "react-redux";
import useStyles from "./auth-jss";
// Actions
import { login, clearErrors } from "../../redux/actions/authActions";
// App layouts
import Spinner from "../layouts/Spinner";

const Login = (props) => {
  const { isAuthenticated, loading, login, clearErrors } = props;

  const classes = useStyles();
  useEffect(() => {
    clearErrors()

  }, [isAuthenticated,clearErrors]);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;
  const onSubmit = async (e) => {
    e.preventDefault();
    await login({ username, password });
  };
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  return (
    <>
      <Helmet>
        <title>Helper | login</title>
      </Helmet>
      <Card className={`${classes.auth} card-shadow text-center`}>
        <h3 className="title">Sign In</h3>
        <h6 className="subtitle">Start helping others or getting help.</h6>
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="text-input"
              name="username"
              value={username}
              placeholder="Username Or Email"
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
          {loading ? (
            <Spinner />
          ) : (
            <>
              <input type="submit" value="Login" className="button-primary" />
              <Link to="/register" className="link-primary">
                {" "}
                create account?
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
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
