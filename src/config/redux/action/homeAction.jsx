import { current } from '@reduxjs/toolkit';
import Axios from 'axios';

// const setDataBlog = () => {
//     return (dispatch) => {
//         Axios.get('http://localhost:3000/v1/blog/posts?page=2&perPage=2')
//         .then(result => {
//             const responseAPI = result.data;
//             dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data});
//         })
//         .catch( err => {
//             console.log('err: ', err);
//         });
//     };
// };

const setDataBlog = (page) => (dispatch) => {
    Axios.get(`http://localhost:3000/v1/blog/posts?page=${page}&perPage=2`)
    .then(result => {
        const responseAPI = result.data;
        dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data});
        dispatch({
            type: 'UPDATE_PAGE',
            payload: {
                currentPage: responseAPI.current_page,
                totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page)
            }
        });
    })
    .catch( err => {
        console.log('err: ', err);
    });
};

export { setDataBlog };