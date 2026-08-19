import { CartoTheme, Markdown } from "@servicetitan/anvil2-ai-kit";
import "@servicetitan/anvil2-ai-kit/styles.css";

function App() {
  return (
    <CartoTheme>
      <div style={{ width: "48rem" }}>
        <Markdown source="I reviewed the agreement and found **two items** that need attention." />
      </div>
    </CartoTheme>
  );
}

export default App;
