import {
  AgentMessage,
  AgentThinking,
  Card,
  CartoTheme,
  Text,
  UserMessage,
} from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

const timestamp = new Date(2026, 3, 1, 16, 40);

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
        <UserMessage content="User message" timestamp={timestamp} />
        <AgentMessage
          content={
            <>
              <Text text="This is text the agent has finished streaming." />
              <Card
                content={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: 32,
                    }}
                  >
                    <Text text="[Loaded Atlas content]" />
                  </div>
                }
              />
              <Text text="More text has finished streaming. Atlas is done." />
            </>
          }
          copyText="This is text the agent has finished streaming. More text has finished streaming. Atlas is done."
          timestamp={timestamp}
          onLike={() => {}}
          onDislike={() => {}}
        />
        <AgentThinking />
      </div>
    </CartoTheme>
  );
}

export default App;
