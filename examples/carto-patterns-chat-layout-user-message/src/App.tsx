import { CartoTheme, UserMessage } from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

function App() {
  return (
    <CartoTheme>
      <div style={{ width: "48rem" }}>
        <UserMessage
          content="Summarize this agreement and flag anything unusual."
          timestamp={new Date(2026, 3, 1, 16, 40)}
        />
      </div>
    </CartoTheme>
  );
}

export default App;
