import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TalleresAutoconocimiento from "./pages/TalleresAutoconocimiento";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TalleresAutoconocimiento />
  </StrictMode>,
);
