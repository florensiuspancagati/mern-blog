import Axios from "axios";

export const setForm = (formType, formValue) => {
    return {type:'SET_FORM_DATA', formType, formValue};
}

export const setImagePreview = (payload) => {
    return {type:'SET_IMAGE_PREVIEW', payload};
}

export const postToAPI = (form, image) => {
    const data = new FormData();
    data.append('title', form.title);
    data.append('body', form.body);
    data.append('image', image);

    Axios.post('http://localhost:3000/v1/blog/post', data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(res => {
        console.log('success: ', res);
    })
    .catch(err => {
        console.log('err: ', err);
    })
}

export const updateToAPI = (form, image, id) => {
    const data = new FormData();
    data.append('title', form.title);
    data.append('body', form.body);
    data.append('image', image);

    Axios.put(`http://localhost:3000/v1/blog/post/${id}`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then(res => {
        console.log('success: ', res);
    })
    .catch(err => {
        console.log('err: ', err);
    })
}