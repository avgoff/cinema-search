import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/movie";
import { fetchMoviesBySearch } from "../thunks/fetchMoviesBySearch";
import { RootState } from "../store";

type MovieState = {
  movies: Movie[];
  loading: boolean;
  error: string | null;
};

const initialState: MovieState = {
  movies: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearMovies: (state) => {
      state.movies = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesBySearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMoviesBySearch.fulfilled, (state, action: PayloadAction<Movie[]>) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(fetchMoviesBySearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || "Не найдено.";
      });
  },
});

export const { clearMovies } = movieSlice.actions;
export const selectMovies = (state: RootState) => state.movies.movies;
export const selectLoading = (state: RootState) => state.movies.loading;
export const selectError = (state: RootState) => state.movies.error;
export const movieReducer = movieSlice.reducer;