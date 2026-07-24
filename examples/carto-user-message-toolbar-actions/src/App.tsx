import { UserMessage } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        maxWidth: "48rem",
      }}
    >
      {/* Copy only */}
      <UserMessage
        content="Hey — can you take a look at this?"
        timestamp={new Date(2026, 3, 1, 16, 40)}
      />

      {/* Copy + retry */}
      <UserMessage
        content="Can you look at this?"
        error="Message not delivered."
        onRetry={() => {}}
        timestamp={new Date(2026, 3, 1, 16, 41)}
      />
    </div>
  );
}

export default App;
