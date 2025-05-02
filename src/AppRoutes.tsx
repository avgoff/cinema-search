import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ROUTES } from './constants/routes';

const SignIn = lazy(() => import("./pages/auth/SignIn"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const HistoryPage = lazy(() => import("./pages/HistoryPage/HistoryPage"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));
const MoviePage = lazy(() => import("./pages/MoviePage/MoviePage"));

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div className="container">Загрузка...</div>}>
      <Routes>
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />

        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
          <Route path={ROUTES.HISTORY} element={<HistoryPage />} />
          <Route path={ROUTES.SEARCH} element={<SearchPage />} />
          <Route path={ROUTES.MOVIE} element={<MoviePage />} />
        </Route>

        <Route path="*" element={<div className="container">404 - Страница не найдена</div>} />
      </Routes>
    </Suspense>
  );
};
