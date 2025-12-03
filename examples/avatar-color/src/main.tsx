import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AnvilProvider } from "@servicetitan/anvil2";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AnvilProvider>
      <App />
    </AnvilProvider>
  </StrictMode>,
);
