import { Citation } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ display: "flex", gap: 12 }}>
      {/* Rest */}
      <Citation href="https://example.com" text="Source" />

      {/* Hover */}
      <Citation
        href="https://example.com"
        text="Source"
        data-interactive="hover"
      />

      {/* Focus */}
      <Citation
        href="https://example.com"
        text="Source"
        data-interactive="focus-visible"
      />
    </div>
  );
}

export default App;
