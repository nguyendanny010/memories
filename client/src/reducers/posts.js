import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

/* Reducers are where calculations happen. This is where state gets changed.
 * Reminder: state is a fancy word for a components properties.
 */
export default (posts = [], action) => {

    switch(action.type){
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case LIKE:
            return posts.map((post) => post.id === action.payload._id ? action.payload : post)
        case UPDATE:
            // if posts._id is equal to action.payload._id then return action.payload
            // because action.payload is the newly updated post.
            // Otherwise, return the post.
            return posts.map((post) => post.id === action.payload._id ? action.payload : post)
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }   
}