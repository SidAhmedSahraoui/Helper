import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import useStyles from './auth-jss';
const Login = () => {
const [user , setUser] = useState({
    username:'',
    password:'',
})
const {username , password} = user;
const classes = useStyles();
const onSubmit = (e) => {
    e.preventDefault();
    if(username === '' || password === ''){
        console.log('error')
    }
    else{
        console.log(user);
    }
}
const onChange = (e) => setUser({...user , [e.target.name]: e.target.value })
    return(
        <>
        <Helmet>
            <title>Helper | login</title>
        </Helmet>
            <div className={`${classes.auth} card-shadow text-center`}>
                <h3 className='title'>Sign In</h3>
                <h6 className='subtitle'>Start helping others or getting help.</h6>
                <form className='form' onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="text-input" 
                        name='username' 
                        value={username} 
                        placeholder='Username Or Email' 
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
                    <input 
                    type="submit" 
                    value="Login" 
                    className='button-primary' />
                    <Link to='/register' className='link-primary'> create account?</Link>
                </form>
            </div>
        </>
    )
}

export default Login