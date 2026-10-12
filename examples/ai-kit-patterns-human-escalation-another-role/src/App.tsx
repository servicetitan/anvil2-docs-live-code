import {
  AgentMessage,
  AgentThinking,
  Button,
  Card,
  CartoTheme,
  Markdown,
  Text,
  UserMessage,
} from "@servicetitan/anvil2-ai-kit";
import { IconCopy } from "@servicetitan/anvil2-icons";
import "@servicetitan/anvil2-ai-kit/styles.css";
import { Reasoning } from "../escalation-reasoning/Reasoning";

const timestamp = new Date(2026, 3, 1, 16, 40);

const voidRequest =
  "Can you void invoice #4471? Customer says they were double-charged.";

const roleBlock =
  "I can see the invoice, but voiding it isn't something CSR accounts can do — that action is restricted to Accounting. I can draft a message to send to whoever's on your Accounting team with the invoice number and reason attached. Want me to?";

const sendToMarcus = "Yeah, send it to Marcus, he handles our AR.";

const draftParagraphs = [
  "Hi Marcus,",
  "Could you void invoice #4471 when you get a chance? The customer reported being double-charged.",
  "Let me know once it's taken care of — thanks!",
];

const draft = draftParagraphs.join("\n\n");

const readyToSend =
  "Ready to send — just customize as needed for however you reach Marcus (Slack, email, etc.).";

const worked = `Checked whether this account can void invoice #4471.

- The invoice is visible
- Voiding is restricted to Accounting, not CSR accounts
- Person asked to send the request to Marcus, who handles AR
- Drafted a message with the invoice number and the double-charge reason`;

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
          content={voidRequest}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <Markdown source={roleBlock} />
        <UserMessage
          content={sendToMarcus}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <AgentMessage
          timestamp={timestamp}
          copyText={`${draft}\n\n${readyToSend}`}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Reasoning
                label="Worked for 10 seconds"
                content={<Markdown source={worked} />}
              />
              <Card
                content={
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 24,
                        width: "100%",
                      }}
                    >
                      {draftParagraphs.map((paragraph) => (
                        <Text key={paragraph} text={paragraph} />
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="xsmall"
                      label="Copy"
                      icon={{ icon: <IconCopy />, position: "left" }}
                      onPress={() => {
                        void navigator.clipboard?.writeText(draft);
                      }}
                    />
                  </div>
                }
              />
              <Markdown source={readyToSend} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
