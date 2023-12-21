import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ChangeThemeProvider from "./contextProviders/ChangeThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChangeThemeProvider>
        <App />
      </ChangeThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
