import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ROUTES } from './constants/routes';
import { SignIn } from "./pages/auth/SignIn";
import { SignUp } from "./pages/auth/SignUp";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />

      <Route path={ROUTES.HOME} element={<Layout />}
      >
        <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTES.HISTORY} element={<HistoryPage />} />
        <Route path={ROUTES.SEARCH} element={<SearchPage />} />
      </Route>

      <Route path="*" element={<div>404 - Страница не найдена</div>} />
    </Routes>
  );
};
