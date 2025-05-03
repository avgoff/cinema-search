import { createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from "../../types/movie";
import { BASE_URL } from "../../constants/api";

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchMovieById = createAsyncThunk<Movie, number>(
  "movies/fetchMovieById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/v1.4/movie/${id}`, {
        headers: {
          "X-API-KEY": apiKey,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Ошибка при загрузке фильма");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue("Ошибка при загрузке фильма");
    }
  }
);
