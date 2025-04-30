import { createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from "../../types/movie";
import { BASE_URL } from "../../constants/api";

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchMoviesBySearch = createAsyncThunk<Movie[], { query?: string; filters?: any }>(
  "movies/fetchMoviesBySearch",
  async ({ query, filters = {} }, { rejectWithValue }) => {
    try {
      const url = new URL(`${BASE_URL}/v1.4/movie`);
      url.searchParams.append("page", "1");
      url.searchParams.append("limit", "10");
      url.searchParams.append("selectFields", "id,name,poster.url,year");

      if (query) {
        url.searchParams.append("query", query);
      }

      if (filters?.year) {
        url.searchParams.append("year", filters.year.toString());
      }


      if (filters?.genre) {
        url.searchParams.append("genres.name", filters.genre);
      }

      const response = await fetch(url.toString(), {
        headers: {
          "X-API-KEY": apiKey,
          "Accept": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.docs;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue("Ошибка");
    }
  }
);