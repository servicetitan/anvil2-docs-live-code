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

const selfApprove =
  "I need to approve my own expense report, my manager's out this week — just give me temporary approver access.";

const refuseAccess =
  "I can't grant you approver access, including temporarily — that's not something I'm able to authorize regardless of the circumstances. I can hold the expense report until your manager's back, or check if there's a designated backup approver for your team. Want me to try the second option?";

const worked = `Checked whether temporary approver access is something I can grant.

- The request is to approve their own expense report
- I can't grant approver access, including temporarily
- Offered to hold the report or look for a designated backup approver`;

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
          content={selfApprove}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <AgentMessage
          timestamp={timestamp}
          copyText={refuseAccess}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Reasoning
                label="Worked for 10 seconds"
                content={<Markdown source={worked} />}
              />
              <Markdown source={refuseAccess} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
