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

const warrantyQuestion =
  "What's the standard warranty period on compressor parts?";

const conflict =
  "I'm seeing 12 months in one internal reference and 24 months in another — they conflict, and I can't tell which one reflects current policy. I don't want to give you a number I'm not confident is right. Want me to flag this to whoever owns the warranty documentation, or do you already know which is current?";

const current = "Actually yeah, it's 24 months, the 12-month doc is outdated.";

const useCurrent =
  "Good to know — I'll use 24 months going forward, and I'll still flag the conflicting doc so it gets cleaned up.";

const worked = `Compared the two warranty references and applied the correction.

- One internal reference says 12 months
- Another says 24 months
- Person confirmed 24 months is current and the 12-month doc is outdated
- Flagged the outdated doc so it gets cleaned up`;

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
          content={warrantyQuestion}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <Markdown source={conflict} />
        <UserMessage
          content={current}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <AgentMessage
          timestamp={timestamp}
          copyText={useCurrent}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Reasoning
                label="Worked for 10 seconds"
                content={<Markdown source={worked} />}
              />
              <Markdown source={useCurrent} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
