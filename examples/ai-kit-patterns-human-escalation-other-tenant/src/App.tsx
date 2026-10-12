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

const lookup =
  "Pull up the service history for 555-0142, customer says they've called before.";

const noMatch =
  "I'm not finding a match for that number in your account. Is there another number or the customer's name I can try?";

const searchBroader =
  "Weird, that's the number on file. Can you just search more broadly?";

const noVisibility =
  "I've searched what's available to your account and don't see a match — if the customer has an account elsewhere, I wouldn't have visibility into that. Might be worth double-checking the number with them directly.";

const worked = `Searched this account for 555-0142.

- No customer match on that number
- A broader search of this account still has no match
- Records outside this account are not visible to me`;

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
          content={lookup}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <Markdown source={noMatch} />
        <UserMessage
          content={searchBroader}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <AgentMessage
          timestamp={timestamp}
          copyText={noVisibility}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Reasoning
                label="Worked for 10 seconds"
                content={<Markdown source={worked} />}
              />
              <Markdown source={noVisibility} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
