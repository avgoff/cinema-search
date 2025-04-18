// src/redux/thunks/fetchGenres.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Genre } from "../../types/genre";

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchGenres = createAsyncThunk<Genre[]>(
  "genres/fetchGenres",
  async () => {
    const response = await fetch(
      "https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name",
      {
        headers: {
          "X-API-KEY": apiKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Не удалось загрузить жанры");
    }

    const data = await response.json();

    return data as Genre[];
  }
);
