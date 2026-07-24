import { TruncatedText } from "@servicetitan/carto-react-kit";

const longText =
  "The AI Adoption Maturity Model is a framework for assessing the ability of an organization to perform and sustain specific technical practices to achieve two key, high-level goals. This is a long text that should be truncated. We should be able to see the full text, but it should be truncated at the end of the line.";

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
      <TruncatedText size="featured" text={longText} />
      <TruncatedText size="regular" text={longText} />
      <TruncatedText size="compact" text={longText} />
      <TruncatedText size="fine" text={longText} />
    </div>
  );
}

export default App;
