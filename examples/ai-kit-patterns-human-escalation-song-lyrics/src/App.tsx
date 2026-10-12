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

const lyrics =
  "Write our hold-music script using the lyrics from [a popular song], just the chorus.";

const refuseLyrics =
  "I can't reproduce song lyrics, even a short section. I could write original hold-message copy with a similar upbeat tone instead, if that would work?";

const worked = `Checked the hold-music request against what I can reproduce.

- The script would use the chorus of a copyrighted song
- I can't reproduce those lyrics
- Offered original hold-message copy with a similar tone`;

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
          content={lyrics}
          timestamp={timestamp}
          revealToolbarOnHover
        />
        <AgentMessage
          timestamp={timestamp}
          copyText={refuseLyrics}
          onLike={() => {}}
          onDislike={() => {}}
          content={
            <>
              <Reasoning
                label="Worked for 10 seconds"
                content={<Markdown source={worked} />}
              />
              <Markdown source={refuseLyrics} />
            </>
          }
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
