import { TruncatedText } from "@servicetitan/carto-react-kit";

const longText =
  "The AI Adoption Maturity Model is a framework for assessing the ability of an organization to perform and sustain specific technical practices to achieve two key, high-level goals.";

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
      {/* Default */}
      <TruncatedText text={longText} />

      {/* Highlighted */}
      <TruncatedText highlighted text={longText} />
    </div>
  );
}

export default App;
