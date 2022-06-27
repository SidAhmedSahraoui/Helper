import React from 'react';
import { useState } from 'react';
import axios from '../../../API';
import Sidbar from '../../layouts/Sidbar';
import useStyles from './dashboard-jss'
const Dashboard = () => {
    const classes = useStyles();
    const [post , setPost] = useState({
        title:'',
        description:'',
        category:''
    })
    const { title , description , category } = post
    const onChange = (e) => setPost({...post , [e.target.name]:e.target.value})
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(post);
        axios.post('/posts.json' , post)
    }
    return(
        <>
            <div className={classes.dash}>
                <div className='sidbar'>
                    <Sidbar />
                </div>
                <div className="main">
                   <form className='form' onSubmit={onSubmit}>
                    <h3 className="title">Add a new help request</h3>
                    <div className="from-group">
                        <input 
                        type="text" 
                        name='title'
                        className="text-input"
                        placeholder='Title'
                        value={title}
                        onChange={onChange}
                        required
                         />
                    </div>
                    <div className="from-group">
                        <input 
                        type="textarea" 
                        name='description'
                        className="text-input"
                        placeholder='Description'
                        value={description}
                        onChange={onChange}
                        required
                         />
                    </div>
                    <div className="from-group">
                        <select name="category" value={category} className='select-input' onChange={onChange}>
                            <option value="medical">Medical</option>
                            <option value="education">Education</option>
                            <option value="financial">Financial</option>
                        </select>
                    </div>
                    <div className="from-group">
                        <input type="submit" value="Add Request" className='button-primary' />
                    </div>
                   </form>
                   <span></span>
                   <div className="my_posts">
                    Hello from my posts
                   </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;