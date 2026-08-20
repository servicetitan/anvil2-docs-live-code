import { useState } from "react";
import {
  CartoTheme,
  ChatLayout,
  PromptBar,
  AgentMessage,
} from "@servicetitan/anvil2-ai-kit";
import "@servicetitan/anvil2-ai-kit/styles.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <CartoTheme>
      <div
        style={{
          width: 640,
          height: 320,
          border: "1px solid #e0e0e0",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <ChatLayout
          conversation={
            <AgentMessage
              content="Hey there! I noticed a few jobs might be running a little late. Want me to walk you through them?"
              timestamp={new Date(2026, 3, 1, 16, 40)}
            />
          }
          prompt={
            <PromptBar
              value={value}
              onChange={setValue}
              placeholder="Ask anything…"
            />
          }
        />
      </div>
    </CartoTheme>
  );
}

export default App;
