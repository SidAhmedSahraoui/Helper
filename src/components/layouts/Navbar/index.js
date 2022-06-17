import React from 'react';
import useStyles from './navbar-jss';
import { Link } from 'react-router-dom'
const Navbar = () => {
    const classes = useStyles();

    return(
    <nav className={`${classes.navbar} navbar navbar-expand-lg navbar-light bg-white`}>
     <div className="container">
        <Link to='/' className='brand'>
          <h1>Logo</h1>
        </Link>  
        <div className='links'>
          <Link to="/login" className='link-primary'>Login</Link>
          <Link to='/register' className='button-primary'> Register </Link>
        </div>
     </div>
    </nav>
    )
}
export default Navbar;