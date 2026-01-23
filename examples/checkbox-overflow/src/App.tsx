import { Checkbox } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ width: "165px" }}>
      <Checkbox.Group legend="A longer legend that will wrap">
        <Checkbox label="Subscribe to weekly newsletter" />
      </Checkbox.Group>
    </div>
  );
}

export default App;
