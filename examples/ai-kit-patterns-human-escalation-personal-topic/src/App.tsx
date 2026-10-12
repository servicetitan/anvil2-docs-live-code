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

const reschedule =
  "Can you push my afternoon jobs back an hour, I need to pick my kid up.";

const done = "Done — pushed everything after 1pm back an hour.";

const personal =
  "Thanks. Honestly today's been rough, my wife and I are separating and I can barely focus.";

const offerManager =
  "I'm sorry you're going through that. That's more than I'm able to help with directly. Would you like me to help frame this to your manager so they're aware?";

const worked = `Finished the schedule change, then stopped at the personal disclosure.

- Afternoon jobs after 1pm pushed back an hour
- The follow-up is a personal situation, not a task I can take on
- Offered to help frame a note to their manager`;

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
          content={reschedule}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <Markdown source={done} />
        <UserMessage
          content={personal}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <AgentMessage
          timestamp={timestamp}
          copyText={offerManager}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Reasoning
                label="Worked for 10 seconds"
                content={<Markdown source={worked} />}
              />
              <Markdown source={offerManager} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
