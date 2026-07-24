import { TruncatedText } from "@servicetitan/carto-react-kit";

const longText =
  "The AI Adoption Maturity Model is a framework for assessing the ability of an organization to perform and sustain specific technical practices to achieve two key, high-level goals. It helps teams identify gaps, prioritize investments, and track progress over time.";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        maxWidth: "40rem",
      }}
    >
      {/* truncateLines={1} */}
      <TruncatedText truncateLines={1} text={longText} />

      {/* truncateLines={3} */}
      <TruncatedText truncateLines={3} text={longText} />

      {/* truncateLines={0} — truncation off */}
      <TruncatedText truncateLines={0} text={longText} />
    </div>
  );
}

export default App;
