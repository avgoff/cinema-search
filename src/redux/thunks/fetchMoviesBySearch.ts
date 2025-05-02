import { createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from "../../types/movie";
import { BASE_URL } from "../../constants/api";
import { IFormInput } from "../../types/forms"; 

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchMoviesBySearch = createAsyncThunk<Movie[], IFormInput>(
  "movies/fetchBySearch",
  async ({ query = "", genre, year }, { rejectWithValue }) => {
    try {
      const isQueryOnly = !!query;
      const baseUrl = isQueryOnly
        ? `${BASE_URL}/v1.4/movie/search`
        : `${BASE_URL}/v1.4/movie`;

      const url = new URL(baseUrl);

      if (isQueryOnly) {
        url.searchParams.append("query", query);
      }

      if (year) {
        url.searchParams.append("year", year);
      }

      if (genre) {
        url.searchParams.append("genres.name", genre);
      }

      url.searchParams.append("page", "1");
      url.searchParams.append("limit", "10");
      const fieldsToSelect = ["id", "name", "poster", "year", "description", "genres"];
      fieldsToSelect.forEach(field => {
        url.searchParams.append("selectFields", field);
      });

      const response = await fetch(url.toString(), {
        headers: {
          "X-API-KEY": apiKey,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        return rejectWithValue("Ошибка загрузки фильмов");
      }

      const data = await response.json();
      return data.docs;
    } catch (error) {
      return rejectWithValue("Ошибка запроса");
    }
  }
);