import { createStore } from '@reduxjs/toolkit'
import { loadState } from '../localStorage'
import rootReducer from './modules/rootReducer';
 
const persistedState = loadState();
const store = createStore( 
  rootReducer,
  persistedState
)
 
export default store;