import React, { useState, useEffect } from 'react';
import useStyles from './navbar-jss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
// Actions
import { logout, loadUser } from '../../../redux/actions/authActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,
  faEnvelope,
  faUser,
  faFileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faDashcube } from '@fortawesome/free-brands-svg-icons';
const Navbar = (props) => {
    const classes = useStyles();
    const { isAuthenticated, user, logout, loadUser } = props;
    useEffect(() => {
      //loadUser()
    }, [])
    const onLogOut = () => {
      //logout()
    }
    const authMenu = (
      <>
        <li className="dropdown">
          <div className="dropdown-menu menu">
            <Link className='dropdown-item item' to='/home'>
              <FontAwesomeIcon className='icon mr-2' icon={faDashcube} />
              Dashboard
            </Link>
          </div>
          <div className="dropdown-menu">
            <Link className='dropdown-item' to='/home'>
              <FontAwesomeIcon className='icon mr-2' icon={faUser} />
              Profile
            </Link>
            <Link className='dropdown-item' to='/posts'>
              <FontAwesomeIcon className='icon mr-2' icon={faFileAlt} />
              Posts
            </Link>
            <Link className='dropdown-item' to='/messages'>
              <FontAwesomeIcon className='icon mr-2' icon={faEnvelope} />
              Messages
            </Link>
            <a className='dropdown-item' onClick={onLogOut} href='#logout'>
              <FontAwesomeIcon className='icon mr-2' icon={faSignOutAlt} />
              Sign out
            </a>
          </div>
        </li>
      </>
    )
    const guest = (
      <>
          <div className='links'>
            <Link to="/login" className='link-primary'>Login</Link>
            <Link to='/register' className='button-primary'> Register </Link>
          </div>
      </>
    )
    
    return(
    <nav className={`${classes.navbar} navbar navbar-expand-lg navbar-light bg-white`}>
       <div className="container">
          <Link to='/' className='brand'>
            <h1 className='logo'>Helper</h1>
          </Link>
          {guest}
        </div>
    </nav>
    )
}
//export default Navbar;
const mapSateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapSateToProps, { logout, loadUser })(Navbar);