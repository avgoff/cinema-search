import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { ROUTES } from './constants/routes';
import { SignIn } from "./pages/auth/SignIn";
import { SignUp } from "./pages/auth/SignUp";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
      <Route path={ROUTES.SIGN_UP} element={<SignUp />} />

      <Route path={ROUTES.HOME} element={<Layout />}>
        <Route path="*" element={<div>404 - Страница не найдена</div>} />
      </Route>
    </Routes>
  );
};
