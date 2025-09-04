const initialState = {
    form: {
        title: '',
        body: '',
        image: null
    },
    imgPreview: null
};

const reducerCreateBlog = (state = initialState, action) => {
    if(action.type === 'SET_FORM_DATA') {
        return {
            ...state,
            form: {
                ...state.form,
                [action.formType]: action.formValue
            }
        }
    };

    if(action.type === 'SET_IMAGE_PREVIEW') {
        return {
            ...state,
            imgPreview: action.payload
        }
    };

    return state;
};

export default reducerCreateBlog;