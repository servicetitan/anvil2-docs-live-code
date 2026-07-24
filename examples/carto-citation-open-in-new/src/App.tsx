import { Citation } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {/* Opens in a new tab */}
      <Citation href="https://example.com" text="Source" target="_blank" />

      {/* Stays on the page */}
      <Citation href="#sources" text="On-page source" />
    </div>
  );
}

export default App;
