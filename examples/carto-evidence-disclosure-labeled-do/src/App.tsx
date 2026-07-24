import { useState } from "react";
import {
  CartoTheme,
  ChatLayout,
  PromptBar,
  AgentMessage,
  ActionLog,
  Text,
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
                  <ActionLog
                    defaultExpanded={false}
                    steps={[
                      {
                        id: "a",
                        title: "Looked up the customer account",
                        status: "success",
                      },
                      {
                        id: "b",
                        title:
                          "Checked the last 20 invoices for overdue balances",
                        status: "success",
                      },
                    ]}
                  />
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
