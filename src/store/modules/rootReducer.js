import { combineReducers } from 'redux';
 
import readList from './readList/reducer';
import wishList from './wishList/reducer';
 
export default combineReducers({
   readList,
   wishList
});