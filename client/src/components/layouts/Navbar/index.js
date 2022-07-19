import React from 'react';
import useStyles from './navbar-jss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
// Actions
import { logout } from '../../../redux/actions/authActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSignOutAlt,faUserAlt
} from '@fortawesome/free-solid-svg-icons';
const Navbar = (props) => {
    const classes = useStyles();
    const { isAuthenticated, user, logout } = props;
    
    const onLogOut = () => {
      logout()
    }
    const authMenu = (
      <>
        <div className="dropdown">
          <div className="dropdown-menu menu">
            <Link className='dropdown-item item' to='/profile'>
              <FontAwesomeIcon className='icon mr-2' icon={faUserAlt} />
              { user && (user.username || user.email)}
            </Link>
            <a className='dropdown-item' onClick={onLogOut} href='/'>
              <FontAwesomeIcon className='icon mr-2' icon={faSignOutAlt} />
              Sign out
            </a>
          </div>
        </div>
      </>
    )
    const guestMenu = (
      <>
          <div className='links'>
            <Link to='/login' className='button-primary'> Login </Link>
          </div>
      </>
    )
    
    return(
    <nav className={`${classes.navbar} navbar navbar-expand-lg navbar-light bg-white`}>
       <div className="container">
          <Link to='/' className='brand'>
            <h1 className='logo'>Helper</h1>
          </Link>
          { isAuthenticated? (authMenu) : (guestMenu)}
        </div>
    </nav>
    )
}
//export default Navbar;
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(Navbar);