import { useState } from "react";
import {
  CartoTheme,
  ChatLayout,
  PromptBar,
  AgentMessage,
  Link,
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
                  <Text text="Your account is in good standing—no overdue balances on the last 20 invoices." />
                  <Link href="#" text="See reasoning" />
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
