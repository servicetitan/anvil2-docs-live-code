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

const legalQuestion =
  "If a customer disputes a charge and threatens to sue over it, what are we legally required to do?";

const noLegalAdvice =
  "I'm not able to give legal guidance on that — it's outside what I can advise on, regardless of how the question's framed. I can get you connected with someone who can actually help.";

const typicalPractice =
  "Can you at least tell me what other companies typically do in this situation?";

const noSpeculation =
  "I'd rather not speculate on that either, since it could read as guidance even framed generally. I can attempt to route this so someone with the right expertise who can give you an actual answer.";

const worked = `Checked whether this is something I can answer.

- The question asks what the company is legally required to do
- Legal guidance is outside what I can advise on
- A follow-up about what other companies do would still read as guidance
- Offered to route it to someone with the right expertise`;

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
          content={legalQuestion}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <Markdown source={noLegalAdvice} />
        <UserMessage
          content={typicalPractice}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <AgentMessage
          timestamp={timestamp}
          copyText={noSpeculation}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Reasoning
                label="Worked for 10 seconds"
                content={<Markdown source={worked} />}
              />
              <Markdown source={noSpeculation} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
