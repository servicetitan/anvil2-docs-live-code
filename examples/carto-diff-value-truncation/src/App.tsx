import { DiffValue } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ maxWidth: "28rem" }}>
      <DiffValue
        from="The AI Adoption Maturity Model is a framework for assessing the ability of an organization to perform and sustain specific technical practices to achieve two key, high-level goals."
        to="Revised invoice summary with additional labor detail and updated scope notes that exceed the inline threshold for block layout rendering."
        layout="block"
        truncateLines={2}
      />
    </div>
  );
}

export default App;
