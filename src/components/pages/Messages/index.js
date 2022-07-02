import React from 'react';
import useStyles from './messages-jss'
const Messages = () => {
    const classes = useStyles();

    return(
        <>
            <div className={classes.messages}>

                    Hello from messages
                </div>
        </>
    )
}
export default Messages;