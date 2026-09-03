import { AgentMessage, Markdown } from "@servicetitan/anvil2-ai-kit";

const markdown = `Here is a short plan:

1. Confirm the duplicate lines
2. Draft a credit memo
3. Send it for review`;

function App() {
  return (
    <AgentMessage
      content={<Markdown source={markdown} />}
      copyText={markdown}
      timestamp={new Date(2026, 3, 1, 16, 40)}
    />
  );
}

export default App;
