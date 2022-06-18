import React from 'react';
import Sidbar from '../../layouts/Sidbar';
import useStyles from './dashboard-jss'
const Dashboard = () => {
    const classes = useStyles();

    return(
        <>
            <div className={classes.dash}>
                <div className='sidbar'>
                    <Sidbar />
                </div>
                <div className="main">
                    Hello from main
                </div>
            </div>
        </>
    )
}
export default Dashboard;