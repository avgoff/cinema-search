import { Middleware } from "@reduxjs/toolkit";
import { addFavorite, removeFavorite } from "../slices/favoritesSlice";

export const logFavoriteMiddleware: Middleware = (store) => (next) => (action) => {
  if (addFavorite.match(action)) {
    console.log(`Добавлено в избранное: ${action.payload.name}`);
  }

  if (removeFavorite.match(action)) {
    console.log(`Удалено из избранного: ID ${action.payload}`);
  }

  return next(action);
};