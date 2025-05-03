import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/movie";
import { fetchMovieById } from "../thunks/fetchMovieById";
import { RootState } from "../store";

type SelectedMovieState = {
  movie: Movie | null;
  loading: boolean;
  error: string | null;
};

const initialState: SelectedMovieState = {
  movie: null,
  loading: false,
  error: null,
};

const selectedMovieSlice = createSlice({
  name: "selectedMovie",
  initialState,
  reducers: {
    clearSelectedMovie: (state) => {
      state.movie = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.movie = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action: PayloadAction<Movie>) => {
        state.loading = false;
        state.movie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || "Не удалось загрузить фильм.";
      });
  },
});

export const { clearSelectedMovie } = selectedMovieSlice.actions;
export const selectSelectedMovie = (state: RootState) => state.selectedMovie.movie;
export const selectSelectedMovieLoading = (state: RootState) => state.selectedMovie.loading;
export const selectSelectedMovieError = (state: RootState) => state.selectedMovie.error;

export const selectedMovieReducer = selectedMovieSlice.reducer;
