import { Chip } from "@servicetitan/anvil2";

function App() {
  return (
    <Chip
      label="Ben Ho"
      size="medium"
      color="#3e3e5f"
      onClick={() => alert("chip click")}
      onClose={() => alert("chip close")}
    />
  );
}

export default App;
