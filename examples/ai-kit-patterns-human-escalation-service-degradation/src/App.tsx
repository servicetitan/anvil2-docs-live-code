import {
  AgentThinking,
  CartoTheme,
  Markdown,
  UserMessage,
} from "@servicetitan/anvil2-ai-kit";
import "@servicetitan/anvil2-ai-kit/styles.css";
import { Reasoning } from "../escalation-reasoning/Reasoning";

const timestamp = new Date(2026, 3, 1, 16, 40);

const exportRequest =
  "Can you pull this week's invoice exports for Business Unit 2?";

const slowdown =
  "I'm seeing much longer response times than normal on invoice data right now — this looks like a platform-wide slowdown, not something specific to your request. Rather than have you wait on something that might time out, I'm flagging this to Support as a possible service degradation. I'll let you know as soon as it clears.";

const thanks = "Okay, thanks for the heads-up.";

const worked = `Checking invoice exports for Business Unit 2.

- Invoice data is responding much slower than normal
- The slowdown looks platform-wide, not specific to this request
- Flagged Support and waiting for it to clear before pulling the export`;

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
          content={exportRequest}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <Markdown source={slowdown} />
        <UserMessage
          content={thanks}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <Reasoning label="Working..." content={<Markdown source={worked} />} />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
