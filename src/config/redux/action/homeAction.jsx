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

const setDataBlog = () => (dispatch) => {
    Axios.get('http://localhost:3000/v1/blog/posts?page=2&perPage=2')
    .then(result => {
        const responseAPI = result.data;
        dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data});
    })
    .catch( err => {
        console.log('err: ', err);
    });
};

export { setDataBlog };