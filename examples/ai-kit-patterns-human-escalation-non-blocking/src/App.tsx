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

const userRequest =
  "Pull up the Google docs and summarize them. Begin creating a list of what the pattern documentation should include and entail, and what assets I might produce to help illustrate this pattern. Also look at the stuff from Ankur's agent, it should reference a Github repo with a number of agent skills that handle this stuff";

const accessUpdate = `The first document ("Legal AI Guidelines review," ID 1U5Avh7...) isn't accessible — I don't have permission to it, and it doesn't turn up in your Drive search. It may need to be shared with me directly, or it may have been moved/renamed.

I do have the second doc. Let me now check the GitHub repo Ankur's agent referenced.`;

const workingList = `Here's where things stand, plus the working list you asked for.

**Access gaps (so you know what's missing)**

- First linked doc ("Legal AI Guidelines review," id 1U5Avh7...) — not accessible to me. It's not in your Drive search either, so it may need to be shared directly or it's been moved/renamed. Worth pinging whoever owns it.
- [...]`;

const driveWork = `Loaded the Drive tools and searched from this account.

- "Legal AI Guidelines review" (1U5Avh7...) — no permission, and it does not appear in Drive search
- Second linked doc — opened`;

const followUpWork = `**Integrations:** Google Drive, GitHub

**Web:** looked up the agent-skills repo Ankur's agent referenced

**Commands**

- Listed that repo
- Read the skill that covers pattern documentation

**Notes**

- The first Drive doc is still inaccessible
- The second doc is the one that can be summarized`;

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
        <UserMessage content={userRequest} timestamp={timestamp} />
        <AgentMessage
          timestamp={timestamp}
          copyText={`${driveWork}\n\n${accessUpdate}\n\n${followUpWork}\n\n${workingList}`}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Reasoning
                label="Used Google Drive integration, loaded tools"
                content={<Markdown source={driveWork} />}
              />
              <Markdown source={accessUpdate} />
              <Reasoning
                label="Used 2 integrations, searched the web, ran 2 commands · 2 notes"
                content={<Markdown source={followUpWork} />}
              />
              <Markdown source={workingList} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
