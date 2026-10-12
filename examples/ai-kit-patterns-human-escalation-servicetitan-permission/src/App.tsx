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

const featureRequest =
  "Can you enable the new AI invoice-suggestion feature for our account?";

const permissionBlock =
  "That feature needs to be turned on from ServiceTitan's side first — it's gated behind a feature flag that isn't in your tenant's control yet, even at the owner level. I can open a request with ST Support to get it enabled. Want me to?";

const goAhead = "Yes, go ahead.";

const submitted =
  "Submitted to ST Support — requesting the AI invoice-suggestion feature flag for this tenant. I'll update you once they respond.";

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
          content={featureRequest}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <Markdown source={permissionBlock} />
        <UserMessage
          content={goAhead}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <AgentMessage
          timestamp={timestamp}
          copyText={submitted}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Reasoning label="Worked for 10 seconds" />
              <Markdown source={submitted} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
