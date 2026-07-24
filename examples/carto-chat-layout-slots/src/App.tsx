import { type ReactNode, useState } from "react";
import {
  CartoTheme,
  ChatLayout,
  PromptBar,
  UserMessage,
} from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

function Frame({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: 320,
        height: 300,
        border: "1px solid #e0e0e0",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}

function App() {
  const [value, setValue] = useState("");
  const prompt = (
    <PromptBar value={value} onChange={setValue} placeholder="Ask anything…" />
  );
  const conversation = (
    <UserMessage
      content="Hey — can you help with this invoice?"
      timestamp={new Date(2026, 3, 1, 16, 40)}
    />
  );

  return (
    <CartoTheme>
      <div style={{ display: "flex", gap: 16 }}>
        <Frame>
          <ChatLayout conversation={conversation} prompt={prompt} />
        </Frame>
        <Frame>
          <ChatLayout conversation={conversation} />
        </Frame>
        <Frame>
          <ChatLayout prompt={prompt} />
        </Frame>
      </div>
    </CartoTheme>
  );
}

export default App;
