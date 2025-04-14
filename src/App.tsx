import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignIn } from './pages/auth/SignIn';
import { SignUp } from './pages/auth/SignUp';
import { ROUTES } from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;