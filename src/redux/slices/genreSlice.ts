import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Genre } from "../../types/genre";
import { fetchGenres } from "../thunks/fetchGenres";
import { RootState } from "../store";

type GenreState = {
  genres: Genre[];
  isLoading: boolean;
  error?: string;
};

const initialState: GenreState = {
  genres: [],
  isLoading: false,
};

const genreSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    setGenres(state, action: PayloadAction<Genre[]>) {
      state.genres = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Ошибка загрузки жанров";
      });
  },
});

export const { setGenres } = genreSlice.actions;
export const selectGenres = (state: RootState) => state.genres.genres;
export const genreReducer = genreSlice.reducer;
