import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    dataBlogs: [],
    name: 'Panca'
};

const reducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_DATA_BLOG') {
        return {
            ...state,
            dataBlogs: action.payload
        };
    }

    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Dwi Panca'
        };
    }

    return state;
};

const store = configureStore({reducer});

export default store