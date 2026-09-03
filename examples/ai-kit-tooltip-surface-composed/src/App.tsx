import { TooltipSurface } from "@servicetitan/anvil2-ai-kit";

function App() {
  return (
    <TooltipSurface
      content={
        <span style={{ display: "flex", gap: 12 }}>
          <span>Revenue</span>
          <strong>$42,000</strong>
        </span>
      }
      caret="left"
    />
  );
}

export default App;
