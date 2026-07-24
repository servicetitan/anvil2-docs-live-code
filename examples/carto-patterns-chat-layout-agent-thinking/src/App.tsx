import { AgentThinking, CartoTheme } from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

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
