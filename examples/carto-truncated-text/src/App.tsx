import { TruncatedText } from "@servicetitan/carto-react-kit";

const longText =
  "The AI Adoption Maturity Model is a framework for assessing the ability of an organization to perform and sustain specific technical practices to achieve two key, high-level goals. It helps teams identify gaps, prioritize investments, and track progress over time. Maturity levels run from ad hoc experimentation to scaled deployment.";

function App() {
  return (
    <div style={{ maxWidth: "60rem" }}>
      <TruncatedText text={longText} />
    </div>
  );
}

export default App;
