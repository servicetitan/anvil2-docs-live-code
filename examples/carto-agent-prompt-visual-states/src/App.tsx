import { AgentPrompt } from "@servicetitan/carto-react-kit";

const options = [
  { value: "choc", label: "Chocolate" },
  { value: "van", label: "Vanilla" },
  { value: "straw", label: "Strawberry" },
];

const noop = () => {};

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: 24,
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {/* Empty — no selection */}
      <div style={{ width: 280 }}>
        <AgentPrompt
          question="Which flavor?"
          options={options}
          value={null}
          onChange={noop}
          allowOther={false}
          onClose={noop}
        />
      </div>

      {/* Selected */}
      <div style={{ width: 280 }}>
        <AgentPrompt
          question="Which flavor?"
          options={options}
          value="straw"
          onChange={noop}
          allowOther={false}
          onClose={noop}
        />
      </div>

      {/* Disabled */}
      <div style={{ width: 280 }}>
        <AgentPrompt
          question="Which flavor?"
          options={options}
          value={null}
          onChange={noop}
          allowOther={false}
          onClose={noop}
          disabled
        />
      </div>
    </div>
  );
}

export default App;
