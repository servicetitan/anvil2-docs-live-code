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

const reviewQuestion =
  "Did the review request go out to the Hendersons after their job closed yesterday?";

const sentConfirmed =
  "Yes — I sent it right after the job was marked complete, and the send confirmed successfully on my end.";

const neverReceived = "They're saying they never got anything.";

const deliveryGap =
  "From what I can see, it went through without an error — I don't have visibility into anything past the send confirmation, like whether it landed in spam or bounced silently. I can't diagnose that further myself, so I'd flag this to the product team as a possible delivery gap rather than guess. Want me to do that?";

const flagIt = "Yeah, might as well.";

const flagged =
  "Flagged — noting Atlas confirmed send, but the customer reports non-receipt.";

const worked = `Rechecked the review-request send and filed the gap.

- Job marked complete yesterday
- Review request send confirmed on this side
- No error, bounce, or spam signal past the confirmation
- Person asked to flag it
- Filed a delivery-gap note: send confirmed, customer reports non-receipt`;

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
          content={reviewQuestion}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <Markdown source={sentConfirmed} />
        <UserMessage
          content={neverReceived}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <Markdown source={deliveryGap} />
        <UserMessage
          content={flagIt}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <AgentMessage
          timestamp={timestamp}
          copyText={flagged}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Reasoning
                label="Worked for 10 seconds"
                content={<Markdown source={worked} />}
              />
              <Markdown source={flagged} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
