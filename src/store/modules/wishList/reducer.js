import { createReducer } from '@reduxjs/toolkit';
import {
 addToWishList,
 removeFromWishList,
} from './actions';
 
const wishList = createReducer([], {
 [addToWishList]: (state, action) => {
   const { payload } = action;
   const { id } = payload;
 
   const comicExists = state.find(comic => comic.id === id);
  
   if (!comicExists) {
     state.push(payload);
   }
 },
 [removeFromWishList]: (state, action) => {
   const comicIndex = state.findIndex(comic=> comic.id === action.payload.id);
 
   if (comicIndex >= 0) {
     state.splice(comicIndex, 1);
   }
 },
});
 
export default wishList;