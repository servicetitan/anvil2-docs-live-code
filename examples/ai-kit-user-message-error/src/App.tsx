import { UserMessage } from "@servicetitan/anvil2-ai-kit";

function App() {
  return (
    <UserMessage
      content="Can you look at this?"
      error="Message not delivered."
      onRetry={() => {}}
      timestamp={new Date(2026, 3, 1, 16, 40)}
    />
  );
}

export default App;
