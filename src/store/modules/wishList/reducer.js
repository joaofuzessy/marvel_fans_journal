import { createReducer } from '@reduxjs/toolkit';
import {
 addToReadList,
 removeFromReadList,
 updateAmount,
} from './actions';
 
const readList = createReducer([], {
 [addToReadList]: (state, action) => {
   const { payload } = action;
   const { id } = payload;
 
   const comicExists = state.find(comic => comic.id === id);
  
   if (comicExists) {
     comicExists.amount = comicExists.amount + 1;
   } else {
     payload.amount = 1;
     state.push(payload);
   }
 },
 [removeFromReadList]: (state, action) => {
   const comicIndex = state.findIndex(comic=> comic.id === action.payload);
 
   if (comicIndex >= 0) {
     state.splice(comicIndex, 1);
   }
 },
 [updateAmount]: (state, action) => {
   const { id, amount } = action.payload;
   const comicExists = state.find(comic => comic.id === id);
 
   if (comicExists) {
     console.log(action.payload)
     const comicIndex = state.findIndex(comic => comic.id === comicExists.id);
 
     if (comicIndex >= 0 && amount >= 0) {
       state[comicIndex].amount = Number(amount);
     }
   }
 
   return state;
 },
});
 
export default readList;