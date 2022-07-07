import React, { Fragment } from 'react';
import Sidbar from '../../layouts/Sidbar';
import useStyles from './dashboard-jss'
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Messages from '../Messages';
import AddPost from '../AddPost';
import Posts from '../Posts';
import Profile from '../Profile'

const Dashboard = ({isAuthenticated}) => {
    const classes = useStyles();
    // make sure user is authenticated
    if (!isAuthenticated) {
        return <Navigate to={"/"} />;
      }
    return(
        <>
            <div className={classes.dash}>
                <div className='sidbar'>
                    <Sidbar />
                </div>
                <div className="main">
                   <Routes>
                    <Route exact path='/' element={<Profile />} />
                    <Route exact path='/add' element={<AddPost/>} />
                    <Route exact path='/messages' element={<Messages/>} />
                    <Route exact path='/posts' element={<Posts />} />
                   </Routes>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
  export default connect(mapStateToProps)(Dashboard);