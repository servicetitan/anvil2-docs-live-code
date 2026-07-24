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
      <CartoTheme
        appearance="light"
        style={{
          backgroundColor: "#ffffff",
          color: "#141414",
          width: "100%",
          minHeight: "100%",
          height: "100%",
        }}
      >
        <App />
      </CartoTheme>
    </AnvilProvider>
  </StrictMode>,
);
