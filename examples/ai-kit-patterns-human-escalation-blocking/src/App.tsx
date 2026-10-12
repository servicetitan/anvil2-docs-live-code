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
  "It says you have Github access, what might be the reason you can't access the repo?";

const check = "Let me check whether a GitHub connector is available to add.";

const connectorSearch = `- Org connector directory — no GitHub app listed
- Sandbox authentication — no way to sign in to that repo from here
- Nothing in the directory can be added from this conversation`;

const options = `No GitHub connector shows up in your org's available directory either — so right now there's no way for me to authenticate into that repo, whether through the sandbox or through a connector.

Your options:

- Paste in the relevant file(s)/folder contents directly (even just the golden-situations examples Ankur's agent pointed at)
- Check with whoever manages your Anthropic/Claude connectors whether a GitHub app can be added to the org's directory
- Pull it up yourself and drop me the contents or a summary

Anything you can paste in, I can fold straight into the pattern-documentation outline.`;

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
          copyText={`${check}\n\n${connectorSearch}\n\n${options}`}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Markdown source={check} />
              <Reasoning
                label="Searching connectors"
                content={<Markdown source={connectorSearch} />}
              />
              <Markdown source={options} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
