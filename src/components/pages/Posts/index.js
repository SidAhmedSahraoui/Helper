import React , { useEffect} from 'react';
import Sidbar from '../../layouts/Sidbar';
import useStyles from './posts-jss';
import axios from 'axios'
const Posts = () => {
    const classes = useStyles();
    
    return(
        <>
            <div className={classes.posts}>
                <div className='sidbar'>
                    <Sidbar />
                </div>
                <div className="main">
                    Hello from posts
                </div>
            </div>
        </>
    )
}
export default Posts;