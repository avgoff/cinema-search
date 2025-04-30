import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { genreReducer } from "./slices/genreSlice";
import { movieReducer } from "./slices/movieSlice";
import { favoritesReducer } from "./slices/favoritesSlice";
import { historyReducer } from "./slices/historySlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

const rootReducer = combineReducers({
  genres: genreReducer,
  movies: movieReducer,
  favorites: favoritesReducer,
  history: historyReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites', 'history'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;