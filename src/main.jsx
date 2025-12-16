import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider>
    <BrowserRouter>
      <Routes>
        <App />
      </Routes>
    </BrowserRouter>
  </Provider>
);
