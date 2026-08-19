import { AgentThinking, CartoTheme } from "@servicetitan/anvil2-ai-kit";
import "@servicetitan/anvil2-ai-kit/styles.css";

function App() {
  return (
    <CartoTheme>
      <div style={{ width: "48rem" }}>
        <AgentThinking label="Atlas is thinking…" />
      </div>
    </CartoTheme>
  );
}

export default App;
