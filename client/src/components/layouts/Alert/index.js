import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import useStyles from './Alert-jss';
import { connect } from 'react-redux';
const Alert = (props) => {
    const { auth_error, post_error, msg_error, send_error } = props
   // const errors = [...auth_error,...post_error, msg_error, send_error]
    const classes = useStyles()
    return ( 
        <div className={classes.alert} >
            { (auth_error || post_error || msg_error || send_error) ? 
            <div className='main'>
                <FontAwesomeIcon icon={faInfoCircle} /> 
                <p> {auth_error || post_error || msg_error || send_error }</p>
            </div> 
            : null}
        </div>
     );
}

const mapStateToProps = (state) => ({
    auth_error: state.auth.error,
    post_error: state.post.error,
    msg_error: state.message.error,
    send_error: state.message.error_send
})
 
export default connect(mapStateToProps, {} )(Alert);