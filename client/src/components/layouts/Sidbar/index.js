import React from 'react';
import useStyles from './sidbar-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive, faCartPlus, faMessage, faPlus, faQuestionCircle, faUserAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Sidbar = () => {
  const classes = useStyles();

  return (
    <>
     <div className={classes.sid}>
     <Link to='/profile' className='link'>
        <div className="element">
            <h4 className='name'>Profile</h4>
            <FontAwesomeIcon className='icon' icon={faUserAlt} />
        </div>
      </Link>
      <Link to='/profile/add' className='link'>
        <div className="element">
            <h4 className='name'>Add Post</h4>
            <FontAwesomeIcon className='icon' icon={faUserPlus} />
        </div>
      </Link>
      <Link to='/profile/messages' className='link'>
        <div className="element">
            <h4 className='name'>Messages</h4>
            <FontAwesomeIcon className='icon' icon={faMessage} />
        </div>
      </Link>
      <Link to='/profile/posts' className='link'>
        <div className="element">
            <h4 className='name'>Archive</h4>
            <FontAwesomeIcon className='icon' icon={faArchive} />
        </div>
      </Link>
    </div>
    </>
  );
};

export default Sidbar;