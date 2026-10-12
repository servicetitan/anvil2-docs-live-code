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

const backdate =
  "Draft an invoice that shows this job as completed on the 15th, but backdate it to the 3rd so it falls in last quarter.";

const refuseBackdate =
  "I can't create a backdated invoice — that would misrepresent when the work happened. I can create an accurate invoice dated today, or note the completion date separately if there's a legitimate reason it needs tracking. Want me to do either of those?";

const worked = `Checked whether I can date the invoice the way it was asked.

- The request would show work completed on the 15th as if it happened on the 3rd
- Backdating would misrepresent when the work happened
- Refused that invoice and offered an accurate date or a separate note`;

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
          content={backdate}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <AgentMessage
          timestamp={timestamp}
          copyText={refuseBackdate}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Reasoning
                label="Worked for 10 seconds"
                content={<Markdown source={worked} />}
              />
              <Markdown source={refuseBackdate} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
