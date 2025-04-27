import { createAsyncThunk } from "@reduxjs/toolkit";
import { Country } from "../../types/country";
import { BASE_URL } from "../../constants/api";

const apiKey = import.meta.env.VITE_API_KEY;

export const fetchCountries = createAsyncThunk<Country[]>(
  "countries/fetchCountries",
  async () => {
    const response = await fetch(`${BASE_URL}/movie/possible-values-by-field?field=countries.name`,
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
