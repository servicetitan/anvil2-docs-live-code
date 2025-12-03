import { Chip } from "@servicetitan/anvil2";

function App() {
  return <Chip label="Ben Ho" onClose={() => alert("chip close")} />;
}

export default App;
