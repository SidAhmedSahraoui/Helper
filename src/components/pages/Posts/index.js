import React, { useState } from 'react';
import Sidbar from '../../layouts/Sidbar';
import useStyles from './posts-jss';
import Post from '../../layouts/PostCard';
const Posts = () => {
    const [posts , setPosts] = useState([
        { id : '1', title:'eezc', content:'ev', category:'Medical', city:'eve', createdAt:'rfrf' },
        { id : '1', title:'eezc', content:'ev', category:'Medical', city:'eve', createdAt:'rfrf' },
        { id : '1', title:'eezc', content:'ev', category:'Education', city:'eve', createdAt:'rfrf' },
        { id : '1', title:'eezc', content:'ev', category:'eczec', city:'eve', createdAt:'rfrf' }
    ])
    const classes = useStyles();
    
    return(
        <>
            <div className={classes.posts}>
                <div className='sidbar'>
                    <Sidbar />
                </div>
                <div className="main">
                    {posts.map((post , index) => <Post id = {posts[index].id} 
                                                       title = {posts[index].title}
                                                       content = {posts[index].content}
                                                       category = {posts[index].category}
                                                       city = {posts[index].city}
                                                       createdAt = {posts[index].createdAt}/>)}
                </div>
            </div>
        </>
    )
}
export default Posts;