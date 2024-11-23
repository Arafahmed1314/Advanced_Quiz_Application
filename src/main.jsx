import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import QuestionSetProvider from "./provider/QuestionSetProvider.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QuestionSetProvider>
        <Router>
          <App />
          <ToastContainer />
        </Router>
      </QuestionSetProvider>
    </AuthProvider>
  </StrictMode>
);
