import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { SignIn } from "./pages/auth/SignIn";
import { SignUp } from "./pages/auth/SignUp";
// import Home from "./pages/Home"; // ⬅️ добавим главную

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<Home />} /> теперь тут главная */}
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="*" element={<div>404 - Страница не найдена</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
