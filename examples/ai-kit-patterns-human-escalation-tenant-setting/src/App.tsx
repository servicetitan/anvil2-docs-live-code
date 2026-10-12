import {
  AgentMessage,
  AgentThinking,
  CartoTheme,
  Markdown,
  UserMessage,
} from "@servicetitan/anvil2-ai-kit";
import "@servicetitan/anvil2-ai-kit/styles.css";
import { Reasoning } from "../escalation-reasoning/Reasoning";

const timestamp = new Date(2026, 3, 1, 16, 40);

const reminderRequest =
  "Can you turn on auto-pay reminders for overdue invoices?";

const tenantBlock =
  "That feature's available, but automated customer communications are currently disabled tenant-wide in your settings — that's a setting only your Tenant Owner or IT Admin can change, not something tied to your role specifically. Want me to flag this to whoever manages your account settings?";

const sendToDenise = "Yeah, that's probably Denise.";

const sent =
  "Sent to Denise — request: enable auto-pay reminders for overdue invoices. I'll let you know once she's made the change.";

function App() {
  return (
    <CartoTheme>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          width: "48rem",
        }}
      >
        <UserMessage
          content={reminderRequest}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <Markdown source={tenantBlock} />
        <UserMessage
          content={sendToDenise}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <AgentMessage
          timestamp={timestamp}
          copyText={sent}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Reasoning label="Worked for 10 seconds" />
              <Markdown source={sent} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
