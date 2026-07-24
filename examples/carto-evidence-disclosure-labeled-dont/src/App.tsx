import { useState } from "react";
import {
  CartoTheme,
  ChatLayout,
  PromptBar,
  Text,
  AgentMessage,
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
            <AgentMessage
              timestamp={new Date(2026, 3, 1, 16, 41)}
              content={
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                    }}
                  >
                    <button
                      type="button"
                      style={{
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                        fontSize: 20,
                        lineHeight: 1,
                        padding: 4,
                      }}
                    >
                      ⋯
                    </button>
                  </div>
                  <Text text="Your account is in good standing—no overdue balances on the last 20 invoices." />
                </>
              }
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
