import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@servicetitan/carto-react-kit/styles.css";
import App from "./App.tsx";
import { AnvilProvider, Toaster } from "@servicetitan/anvil2";
import { CartoTheme } from "@servicetitan/carto-react-kit";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster id="app-toaster" />

    <AnvilProvider>
      <CartoTheme appearance="light" className="carto-theme-preview">
        <App />
      </CartoTheme>
    </AnvilProvider>
  </StrictMode>,
);
