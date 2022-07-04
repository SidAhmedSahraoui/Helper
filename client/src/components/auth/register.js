import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Card } from '@mui/material';
import { connect } from 'react-redux'
import useStyles from './auth-jss';
// Actions 
import { register, clearErrors } from '../../redux/actions/authActions'

const Register = (props) => {
    const { isAuthenticated, error, loading, register, clearErrors } = props;
    
    const classes = useStyles();

    useEffect(() => {
        if (isAuthenticated) {
          
        }
    
        // eslint-disable-next-line
      }, [isAuthenticated, props.history]);

    const [user , setUser] = useState({
        username:'',
        email:'',
        phone:'',
        password:'',
        password2:''
    })
    
    const {username , email , phone , password , password2} = user;
    
    const onSubmit = async (e) => {
        e.preventDefault();
        if(username === '' || email === '' || phone === '' || password === ''){
            console.log('Please enter all fields')
        } else if (password.length < 6) {
            console.log('Password must contain at least 6 characters');
        } else if ( password !== password2 ) {
            console.log('Passwords do not match')
        } else {
           await register({username, email, phone, password})
        }
    }
    const onChange = (e) => setUser({...user , [e.target.name]: e.target.value })
    return (
        <>
        <Helmet>
            <title>Helper | Register</title>
        </Helmet>
        <Card className={`${classes.auth} card-shadow text-center`}>
                <h3 className='title'>Sign Up</h3>
                <h6 className='subtitle'>Start helping others or getting help.</h6>
                <form className='form' onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="text-input" 
                        name='username' 
                        value={username} 
                        placeholder='Username' 
                        onChange={onChange} 
                        required />
                    </div>
                    <div className="form-group">
                        <input 
                        type="email" 
                        className="text-input" 
                        name='email' 
                        value={email} 
                        placeholder='Email' 
                        onChange={onChange} 
                        required />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="text-input" 
                        name='phone' 
                        value={phone} 
                        placeholder='Phone' 
                        onChange={onChange} 
                        required />
                    </div>
                    <div className="form-group">
                        <input 
                        type="password" 
                        className="text-input" 
                        name='password' 
                        value={password} 
                        placeholder='Password' 
                        onChange={onChange} 
                        required />
                    </div>
                    <div className="form-group">
                        <input 
                        type="password" 
                        className="text-input" 
                        name='password2' 
                        value={password2} 
                        placeholder='Password Confirmation' 
                        onChange={onChange} 
                        required />
                    </div>
                    <input 
                    type="submit" 
                    value="Register" 
                    className='button-primary' />
                    <Link to='/login' className='link-primary'> Have an account?</Link>
                </form>
            </Card>
        </>
    )
}
const mapStateToProps = (state) => ({
    error: state.auth.error,
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
});

export default connect(mapStateToProps, {register, clearErrors})(Register);