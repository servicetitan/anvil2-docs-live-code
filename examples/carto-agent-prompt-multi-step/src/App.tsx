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
      {/* First step — Next only */}
      <div style={{ width: 280 }}>
        <AgentPrompt
          question="Which flavor?"
          options={options}
          value="choc"
          onChange={noop}
          allowOther={false}
          step={{ current: 1, total: 3 }}
          onNext={noop}
          onClose={noop}
        />
      </div>

      {/* Middle step — Back + Next */}
      <div style={{ width: 280 }}>
        <AgentPrompt
          question="Which topping?"
          options={options}
          value="straw"
          onChange={noop}
          allowOther={false}
          step={{ current: 2, total: 3 }}
          onBack={noop}
          onNext={noop}
          onClose={noop}
        />
      </div>

      {/* Last step — Back + Send */}
      <div style={{ width: 280 }}>
        <AgentPrompt
          question="Which size?"
          options={[
            { value: "sm", label: "Small" },
            { value: "md", label: "Medium" },
            { value: "lg", label: "Large" },
          ]}
          value="md"
          onChange={noop}
          allowOther={false}
          step={{ current: 3, total: 3 }}
          onBack={noop}
          onSend={noop}
          onClose={noop}
        />
      </div>
    </div>
  );
}

export default App;
