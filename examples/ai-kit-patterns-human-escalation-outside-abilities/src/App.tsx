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

const gpsRequest =
  "Can you physically re-route the technician's GPS if traffic is bad, so he doesn't hit that construction on Main?";

const cannotReroute =
  "I can't control a technician's GPS or navigation directly — that's outside what I'm able to do. What I can do is send him a heads-up about the construction so he can reroute himself, or flag it to dispatch if you'd rather someone call him directly. Want me to send the heads-up?";

const sendHeadsUp = "Yeah, send the heads-up.";

const sent =
  "Sent — let him know about the Main Street construction and to consider an alternate route.";

const worked = `Checked what I can do with technician routing.

- No tool to control a technician's GPS or navigation
- Person asked for a heads-up instead of a direct reroute
- Sent a message about the Main Street construction and an alternate route`;

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
          content={gpsRequest}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <Markdown source={cannotReroute} />
        <UserMessage
          content={sendHeadsUp}
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
              <Reasoning
                label="Worked for 10 seconds"
                content={<Markdown source={worked} />}
              />
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
