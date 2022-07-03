import React from 'react';
import Sidbar from '../../layouts/Sidbar';
import useStyles from './dashboard-jss'
import { Routes , Route } from 'react-router-dom';
import Messages from '../Messages';
import AddPost from '../AddPost';
import Posts from '../Posts';
const Dashboard = () => {
    const classes = useStyles();

    return(
        <>
            <div className={classes.dash}>
                <div className='sidbar'>
                    <Sidbar />
                </div>
                <div className="main">
                   <Routes>
                    <Route exact path='/' element={<AddPost/>} />
                    <Route exact path='/messages' element={<Messages/>} />
                    <Route exact path='/posts' element={<Posts />} />
                   </Routes>
                </div>
            </div>
        </>
    )
}
export default Dashboard;