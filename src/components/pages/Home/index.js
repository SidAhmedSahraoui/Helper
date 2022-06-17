import React from 'react';
import Helmet from 'react-helmet';
import { faGraduationCap , faCoins , faUserDoctor } from '@fortawesome/free-solid-svg-icons'


import useStyles from './home-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>Donations website</title>
      </Helmet>
      <div className={`${classes.page}`}>
        <h1 className='title text-center'>Helper!</h1>
        <h5> Charity platform for requesting and giving <span>help</span> for those who <span>need</span>.</h5>
        <h3>Our Services <span className='line'></span></h3>
        <div className="services">
            <div className='service'>
            <FontAwesomeIcon className='icon' icon={faGraduationCap} /><h4>Educational Helps</h4>
            </div>
            <div className='service'>
            <FontAwesomeIcon className='icon' icon={faCoins} /><h4>Financial Helps</h4>
            </div>
            <div className='service'>
            <FontAwesomeIcon className='icon' icon={faUserDoctor} /><h4>Medical Helps</h4>
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;