import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    dataBlog: [],
    name: 'Panca'
};

const reducer = (state = initialState, action) => {
    return state;
};

const store = configureStore({reducer});

export default store