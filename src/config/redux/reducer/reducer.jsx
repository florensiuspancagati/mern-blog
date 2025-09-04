import { combineReducers } from '@reduxjs/toolkit';
import reducerGlobal from './reducerGlobal';
import reducerHome from './reducerHome';
import reducerCreateBlog from './reducerCreateBlog';

const reducer = combineReducers({reducerGlobal, reducerHome, reducerCreateBlog});

export default reducer;