import {
  AgentThinking,
  CartoTheme,
  UserMessage,
} from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

function App() {
  return (
    <CartoTheme>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          width: "48rem",
        }}
      >
        <UserMessage
          content="User message"
          timestamp={new Date(2026, 3, 1, 16, 40)}
        />
        <AgentThinking label="Atlas is thinking…" />
      </div>
    </CartoTheme>
  );
}

export default App;
