import React, { useState } from 'react';
import Sidbar from '../../layouts/Sidbar';
import useStyles from './posts-jss';
import Post from '../../layouts/PostCard';
import { Alert } from '@mui/material';
const Posts = () => {
    const [posts , setPosts] = useState([
        { id : '1', title:'eezc', content:'ev', category:'Medical', city:'eve', createdAt:'rfrf' },
        { id : '2', title:'eezc', content:'ev', category:'Medical', city:'eve', createdAt:'rfrf' },
        { id : '3', title:'eezc', content:'ev', category:'Education', city:'eve', createdAt:'rfrf' },
        { id : '4', title:'eezc', content:'ev', category:'eczec', city:'eve', createdAt:'rfrf' }
    ])
    const classes = useStyles();
    
    return(
        <>
            <div className={classes.posts}>
                <div className='sidbar'>
                    <Sidbar />
                </div>
                <div className="main">
                    {posts.map((post) => <Post  key= {post.id}
                                                id = {post.id} 
                                                title = {post.title}
                                                content = {post.content}
                                                category = {post.category}
                                                city = {post.city}
                                                createdAt = {post.createdAt}/>)}
                </div>
            </div>
        </>
    )
}
export default Posts;