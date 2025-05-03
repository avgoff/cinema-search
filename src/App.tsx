import React from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <ErrorBoundary>
          <AppRoutes />
      </ErrorBoundary>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
