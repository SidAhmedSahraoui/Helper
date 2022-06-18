import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import useStyles from './auth-jss';
const Register = () => {
    const [user , setUser] = useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })
    const {username , email , password , password2} = user;
    const classes = useStyles();
    const onSubmit = (e) => {
        e.preventDefault();
        if(username === '' || password === '' || password === '' || password !== password2){
            console.log('error')
        }
        else{
            console.log(user);
        }
    }
    const onChange = (e) => setUser({...user , [e.target.name]: e.target.value })
    return (
        <>
        <Helmet>
            <title>Helper | Register</title>
        </Helmet>
        <div className={`${classes.auth} card-shadow text-center`}>
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
            </div>
        </>
    )
}
export default Register;