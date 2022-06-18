import React from 'react';
import Sidbar from '../../layouts/Sidbar';
import useStyles from './messages-jss'
const Messages = () => {
    const classes = useStyles();

    return(
        <>
            <div className={classes.messages}>
                <div className='sidbar'>
                    <Sidbar />
                </div>
                <div className="main">
                    Hello from messages
                </div>
            </div>
        </>
    )
}
export default Messages;