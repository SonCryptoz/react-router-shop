import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";

import "./index.css";
import App from "./App.jsx";

// Dùng HashRouter vì GitHub Pages không hỗ trợ server rewrite cho các route như /sign-in, /products/1

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </StrictMode>,
);
