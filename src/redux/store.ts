import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./slices/genreSlice";
import countrieReducer from './slices/countrieSlice';

export const store = configureStore({
  reducer: {
    genres: genreReducer,
    countries: countrieReducer,
},
});
// Типы для использования в хуках
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
