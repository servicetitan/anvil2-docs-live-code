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
              content="Hi, I'm Titan, your business co-pilot! I've been keeping an eye on things for you today 😊"
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
