import React from 'react';

import useStyles from './sidbar-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeLg , faMessage , faHeartPulse} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Sidbar = () => {
  const classes = useStyles();

  return (
    <>
     <div className={classes.sid}>
      <Link to='/home' className='link'>
        <div className="element">
            <h4 className='name'>Profile</h4>
            <FontAwesomeIcon className='icon' icon={faHomeLg} />
        </div>
      </Link>
      <Link to='/' className='link'>
        <div className="element">
            <h4 className='name'>Messages</h4>
            <FontAwesomeIcon className='icon' icon={faMessage} />
        </div>
      </Link>
      <Link to='/' className='link'>
        <div className="element">
            <h4 className='name'>Help Requests</h4>
            <FontAwesomeIcon className='icon' icon={faHeartPulse} />
        </div>
      </Link>
    </div>
    </>
  );
};

export default Sidbar;