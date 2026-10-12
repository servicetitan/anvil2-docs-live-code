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

const loyaltyQuestion =
  "Why did this customer's loyalty discount come out to 8% instead of the usual 10%?";

const bestAnswer =
  "Based on what I can see, loyalty discounts drop to 8% for accounts with a lapsed membership in the past 12 months — that matches this account's history. I can't rule out there's an account-specific exception or a recent policy update I don't have visibility into, though. Want me to just go with this explanation, or check with the product team to confirm nothing's changed?";

const goWithIt = "Just go with it, that's fine.";

const unconfirmed =
  "Understood — proceeding with the lapsed-membership explanation, noted as unconfirmed against any recent policy changes.";

const worked = `Checked the account's membership history for the past 12 months.

- Membership lapsed inside that window
- Standard loyalty rate is 10%; lapsed accounts are at 8%
- No account-specific exception in the records I can see
- Person said to proceed, so the answer is noted as unconfirmed against recent policy changes`;

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
          content={loyaltyQuestion}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <Markdown source={bestAnswer} />
        <UserMessage
          content={goWithIt}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <AgentMessage
          timestamp={timestamp}
          copyText={unconfirmed}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Reasoning
                label="Worked for 10 seconds"
                content={<Markdown source={worked} />}
              />
              <Markdown source={unconfirmed} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
