import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerKey: null,
    popularMovies1: null,
    popularMovies2: null,
    popularMovies3: null,
    popularMovies4: null,
    popularMovies5: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerKey: (state, action) => {
      state.trailerKey = action.payload;
    },
    addPopularMovies1: (state, action) => {
      state.popularMovies1 = action.payload;
    },
    addPopularMovies2: (state, action) => {
      state.popularMovies2 = action.payload;
    },
    addPopularMovies3: (state, action) => {
      state.popularMovies3 = action.payload;
    },
    addPopularMovies4: (state, action) => {
      state.popularMovies4 = action.payload;
    },
    addPopularMovies5: (state, action) => {
      state.popularMovies5 = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerKey,
  addPopularMovies1,
  addPopularMovies2,
  addPopularMovies3,
  addPopularMovies4,
  addPopularMovies5,
} = moviesSlice.actions;

export default moviesSlice.reducer;
