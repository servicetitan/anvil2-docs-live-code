import {
  AgentThinking,
  CartoTheme,
  Text,
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
        <Text text="This is text the agent is actively streaming in right now. Additional content can continue to appear while Atlas works." />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
