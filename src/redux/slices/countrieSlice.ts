import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../../types/country";
import { fetchCountries } from "../thunks/fetchCountries";
import { RootState } from "../store";

interface CountrieState {
  countries: Country[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CountrieState = {
  countries: [],
  isLoading: false,
  error: null,
};

const countrieSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries(state, action: PayloadAction<Country[]>) {
      state.countries = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Ошибка загрузки стран";
      });
  },
});

export const { setCountries } = countrieSlice.actions;
export const selectCountries = (state: RootState) => state.countries.countries;
export default countrieSlice.reducer;
