import { useState } from "react";
import {
  ChatLayout,
  PromptBar,
  UserMessage,
} from "@servicetitan/carto-react-kit";

function App() {
  const [value, setValue] = useState("");

  return (
    <div
      style={{
        height: 420,
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <ChatLayout
        conversation={
          <UserMessage
            content="Hey — can you help with this invoice?"
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
  );
}

export default App;
