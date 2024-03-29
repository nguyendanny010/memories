import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators
/* Actions contain information that you want to send to reducers
 * We 'dispatch'/send this information to our reducers.
 */

/* Try to fetch posts into data then dispatch that data */
export const getPosts = () => async (dispatch) => {
    try{
        const {data} = await api.fetchPosts();
        dispatch({type: FETCH_ALL, payload: data});
    } catch(error){
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try{
        const { data } = await api.createPost(post);
        dispatch({ type: CREATE, payload: data })
    } catch (error){
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {

    try{
        const { data } = await api.updatePost(id, post);
        dispatch({type: UPDATE, payload: data});
    } catch(error){
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {

    try{
        await api.deletePost(id);
        dispatch({type: DELETE, payload: id})
    } catch (error){
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {

    try{
        const { data } = await api.likePost(id);
        dispatch({type: UPDATE, payload: data});
    } catch (error){
        console.log(error);
    }
}