import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getComics } from '../../services/getComics'

const initialState = {
  comicsList: [],
  status: 'idle',
  error: null
}

export const loadComics = createAsyncThunk(
  'comicsList/loadComics',
  async () => {
    const response = await getComics();
    return response;
  }
)

const comicsSlice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    comicsLoaded:{
      reducer(state, action){
        state.comicsList.push(action.payload)
      }
    }
  },
  extraReducers: {
    [loadComics.pending]: (state, action) => {
      return{
        ...state,
        status: 'loading'
      }
    },
    [loadComics.fulfilled]: (state, action) => {
      return{
        ...state,
        status: 'succeded',
        comicsList: action.payload
      }
    },
    [loadComics.rejected]: (state, action) => {
      return{
        ...state,
        status: 'failed',
        error: action.error.message
      }
    }
  }
})



export const { comicsLoaded } = comicsSlice.actions;

export default comicsSlice.reducer;