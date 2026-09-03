import { useState } from "react";
import { AgentMessage } from "@servicetitan/anvil2-ai-kit";
import type { AgentMessageFeedback } from "@servicetitan/anvil2-ai-kit";

function App() {
  const [feedback, setFeedback] = useState<AgentMessageFeedback>(null);

  return (
    <AgentMessage
      content="Does this summary match what you expected?"
      timestamp={new Date(2026, 3, 1, 16, 40)}
      currentFeedback={feedback}
      onLike={() => setFeedback(feedback === "positive" ? null : "positive")}
      onDislike={() => setFeedback(feedback === "negative" ? null : "negative")}
    />
  );
}

export default App;
