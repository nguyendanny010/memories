import React from 'react';
import {Grid, CircularProgress} from '@material-ui/core';
import {useSelector} from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';

/*
 * Our Posts module. This is essentially a container holding individual posts.
 */

const Posts = ({setCurrentId}) => {

    // Fetch posts
    const posts = useSelector((state) => state.posts);

    const classes = useStyles();
    console.log(posts);
    return(
        // If posts.length is 0, return <CircularProgress/>
        // Otherwise, return <Grid>
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        // xs (extra small) devices, take up 12 spaces
                        // sm (small) and larger, take 6 spaces
                        <Grid key={posts._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId}/>
                            </Grid>
                    ))
                }
                 
            </Grid>
        )
    );
}

export default Posts;