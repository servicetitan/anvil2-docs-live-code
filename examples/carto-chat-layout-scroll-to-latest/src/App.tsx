import { useState } from "react";
import {
  CartoTheme,
  ChatLayout,
  PromptBar,
  UserMessage,
} from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <CartoTheme>
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
            <>
              {Array.from({ length: 8 }, (_, i) => (
                <UserMessage
                  key={i}
                  content={`Message ${i + 1} in a transcript long enough to overflow the frame.`}
                  timestamp={new Date(2026, 3, 1, 16, 40 + i)}
                />
              ))}
            </>
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
