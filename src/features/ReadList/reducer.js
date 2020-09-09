import { createReducer } from '@reduxjs/toolkit';
import {
 addToReadList,
 removeFromReadList,
} from './actions';

const readList = createReducer([], {
 [addToReadList]: (state, action) => {
   const { payload } = action;
   const { id } = payload;
 
   const comicExists = state.find(comic => comic.id === id);
  
   if (!comicExists) {
     return [...state, payload]
   }
 },
 [removeFromReadList]: (state, action) => {
   const comicIndex = state.findIndex(comic=> comic.id === action.payload.id);
 
   if (comicIndex >= 0) {
    return state.slice(0, comicIndex).concat(state.slice(comicIndex+1))
   }
 },
});
 
export default readList;