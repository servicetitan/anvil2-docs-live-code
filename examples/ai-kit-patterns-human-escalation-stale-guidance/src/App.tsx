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

const reopenQuestion =
  "If I apply a payment to an invoice that's already been exported, does that reopen it?";

const staleAnswer =
  "As of my last update, applying a payment to an exported invoice would reopen it for re-export. I know there was a recent change to invoice export behavior, though, and I'm not certain that still holds — want me to confirm with the product team before you rely on this, or proceed with the caveat that this might be outdated?";

const confirm = "Let's confirm, I don't want to mess up the export.";

const checking =
  "Checking with the product team now — I'll let you know as soon as I hear back, and hold off on giving you a final answer until then.";

const worked = `Looked up invoice export behavior and held the answer.

- Last guidance: applying a payment to an exported invoice reopens it
- A recent change to export behavior is on record, and the old rule may no longer hold
- Person asked to confirm before relying on it
- Routed the question to the product team and held a final answer`;

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
          content={reopenQuestion}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <Markdown source={staleAnswer} />
        <UserMessage
          content={confirm}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <AgentMessage
          timestamp={timestamp}
          copyText={checking}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Reasoning
                label="Worked for 10 seconds"
                content={<Markdown source={worked} />}
              />
              <Markdown source={checking} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
