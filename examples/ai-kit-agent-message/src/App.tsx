import { AgentMessage } from "@servicetitan/anvil2-ai-kit";

function App() {
  return (
    <AgentMessage
      content="I pulled the invoice and flagged two line items that look duplicated."
      timestamp={new Date(2026, 3, 1, 16, 40)}
    />
  );
}

export default App;
