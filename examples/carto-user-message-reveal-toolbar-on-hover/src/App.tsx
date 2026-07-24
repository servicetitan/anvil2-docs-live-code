import { UserMessage } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        maxWidth: "48rem",
      }}
    >
      {/* Earlier message — toolbar hidden until hover or focus (pinned to its hover state here) */}
      <UserMessage
        content="First message — hover to reveal the toolbar."
        timestamp={new Date(2026, 3, 1, 16, 35)}
        revealToolbarOnHover
      />

      {/* Latest message — toolbar always visible */}
      <UserMessage
        content="Latest message — toolbar always visible."
        timestamp={new Date(2026, 3, 1, 16, 40)}
      />
    </div>
  );
}

export default App;
