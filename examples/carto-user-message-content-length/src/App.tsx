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
      {/* Short */}
      <UserMessage
        content="Hey — can you take a look at this?"
        timestamp={new Date(2026, 3, 1, 16, 40)}
      />

      {/* Long — wraps at the 640px cap */}
      <UserMessage
        content="Here's a longer message that exceeds the comfortable single-line width of the bubble, so it wraps onto multiple lines and never exceeds the 640px cap."
        timestamp={new Date(2026, 3, 1, 16, 41)}
      />
    </div>
  );
}

export default App;
