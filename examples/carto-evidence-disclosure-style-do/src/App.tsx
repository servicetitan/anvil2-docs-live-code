import { useState } from "react";
import {
  CartoTheme,
  ChatLayout,
  PromptBar,
  AgentMessage,
  Text,
  ActionLog,
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
                  <Text text="The last payment failed because the card on file expired." />
                  <ActionLog
                    steps={[
                      {
                        id: "a",
                        title: "Reviewed the payment history",
                        status: "success",
                      },
                      {
                        id: "b",
                        title: "Checked the card expiration date",
                        status: "success",
                        description: "The card on file expired last month.",
                      },
                    ]}
                  />
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
