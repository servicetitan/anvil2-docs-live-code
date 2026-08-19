import { Suggestion } from "@servicetitan/anvil2-ai-kit";

function App() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Suggestion label="Order more" />
      <Suggestion label="Order more" isDisabled />
    </div>
  );
}

export default App;
