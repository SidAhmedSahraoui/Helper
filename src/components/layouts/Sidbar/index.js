import React from 'react';
import useStyles from './sidbar-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage ,faHeartPulse, faHandHoldingHand, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Sidbar = () => {
  const classes = useStyles();

  return (
    <>
     <div className={classes.sid}>
      <Link to='/home' className='link'>
        <div className="element">
            <h4 className='name'>Add Post</h4>
            <FontAwesomeIcon className='icon' icon={faQuestionCircle} />
        </div>
      </Link>
      <Link to='/messages' className='link'>
        <div className="element">
            <h4 className='name'>Messages</h4>
            <FontAwesomeIcon className='icon' icon={faMessage} />
        </div>
      </Link>
      <Link to='/posts' className='link'>
        <div className="element">
            <h4 className='name'>Requests</h4>
            <FontAwesomeIcon className='icon' icon={faHeartPulse} />
        </div>
      </Link>
    </div>
    </>
  );
};

export default Sidbar;