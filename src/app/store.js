import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux';
import { loadState } from '../localStorage'
import readList from '../features/ReadList/reducer';
import wishList from '../features/WishList/reducer';
import comics, { loadComics } from '../features/Comics/comicsSlice' 

const persistedState = loadState();

const rootReducer = combineReducers({
  readList,
  wishList,
  comics
});

const store = configureStore( 
  {reducer: rootReducer},
  persistedState
)

store.dispatch(loadComics());
 
export default store;
