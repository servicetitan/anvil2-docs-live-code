import { AgentMessage, CartoTheme } from "@servicetitan/anvil2-ai-kit";
import "@servicetitan/anvil2-ai-kit/styles.css";

function App() {
  return (
    <CartoTheme>
      <div style={{ width: "48rem" }}>
        <AgentMessage
          content="I reviewed the agreement and prepared the requested update."
          timestamp={new Date(2026, 3, 1, 16, 40)}
          onLike={() => {}}
          onDislike={() => {}}
        />
      </div>
    </CartoTheme>
  );
}

export default App;
