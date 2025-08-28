import { combineReducers } from '@reduxjs/toolkit';
import reducerGlobal from './reducerGlobal';
import reducerHome from './reducerHome';

const reducer = combineReducers({reducerGlobal, reducerHome});

export default reducer;