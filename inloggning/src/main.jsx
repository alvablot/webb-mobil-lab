import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./context/UserContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <LoginProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </LoginProvider>
    </React.StrictMode>
);
