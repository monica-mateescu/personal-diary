import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ModalContextProvider from "../src/contexts/ModalContext";
import EntriesContextProvider from "../src/contexts/EntriesContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EntriesContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </EntriesContextProvider>
  </StrictMode>,
);
