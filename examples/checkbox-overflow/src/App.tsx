import { Checkbox, CheckboxGroup } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ width: "165px" }}>
      <CheckboxGroup legend="A longer legend that will wrap">
        <Checkbox label="Subscribe to weekly newsletter" />
      </CheckboxGroup>
    </div>
  );
}

export default App;
