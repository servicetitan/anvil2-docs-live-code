import { TruncatedText } from "@servicetitan/carto-react-kit";

const longText =
  "The AI Adoption Maturity Model is a framework for assessing the ability of an organization to perform and sustain specific technical practices to achieve two key, high-level goals. It helps teams identify gaps, prioritize investments, and track progress over time.";

function App() {
  return (
    <div style={{ display: "flex", gap: 80, alignItems: "flex-start" }}>
      {/* Collapsed */}
      <div style={{ minWidth: 280, maxWidth: "20rem" }}>
        <TruncatedText truncateLines={2} text={longText} />
      </div>

      {/* Expanded */}
      <div style={{ minWidth: 280, maxWidth: "20rem" }}>
        <TruncatedText truncateLines={2} text={longText} />
      </div>
    </div>
  );
}

export default App;
