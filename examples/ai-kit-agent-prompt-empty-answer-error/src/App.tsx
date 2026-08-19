import { AgentPrompt } from "@servicetitan/anvil2-ai-kit";

const options = [
  { value: "choc", label: "Chocolate" },
  { value: "van", label: "🍨 Vanilla" },
  { value: "straw", label: "🍓 Strawberry" },
];

function App() {
  return (
    <div style={{ width: 380 }}>
      <AgentPrompt
        question="Which flavor would you like?"
        options={options}
        value={null}
        onChange={() => {}}
        allowOther={false}
        onClose={() => {}}
      />
    </div>
  );
}

export default App;
