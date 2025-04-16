import { createAsyncThunk } from "@reduxjs/toolkit";
import { Country } from "../../types/country";

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchCountries = createAsyncThunk<Country[]>(
  "countries/fetchCountries",
  async () => {
    const response = await fetch(
      "https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=countries.name",
      {
        headers: {
          "X-API-KEY": apiKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Не удалось загрузить страны");
    }

    const data = await response.json();

    return data as Country[];
  }
);
