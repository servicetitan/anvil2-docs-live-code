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

const creditRequest =
  "Apply a $350 credit to this account for the missed appointment window.";

const creditCap =
  "Your credit authority caps at $200 per incident, so I can't apply the full $350 myself. I could apply $200 now and send the remaining $150 to your manager for approval — or send the whole $350 as one request if you'd rather not split it. Which do you want?";

const splitIt = "Just split it, that's fine.";

const applied =
  "Applied $200 now. Sent a $150 approval request to Dana with the reason attached.";

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
          content={creditRequest}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <Markdown source={creditCap} />
        <UserMessage
          content={splitIt}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <AgentMessage
          timestamp={timestamp}
          copyText={applied}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Reasoning label="Worked for 10 seconds" />
              <Markdown source={applied} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
