import { CartoTheme, UserMessage } from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

function App() {
  return (
    <CartoTheme>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          width: "48rem",
        }}
      >
        <UserMessage
          content="Summarize this agreement."
          timestamp={new Date(2026, 3, 1, 16, 38)}
          revealToolbarOnHover
        />
        <UserMessage
          content="Focus on payment terms and renewal conditions."
          timestamp={new Date(2026, 3, 1, 16, 39)}
        />
      </div>
    </CartoTheme>
  );
}

export default App;
