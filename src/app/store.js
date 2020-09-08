import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import comicsReducer from '../features/comics/comicsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    comics: comicsReducer
  },
});
