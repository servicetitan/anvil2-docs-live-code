import { NumberField } from "@servicetitan/anvil2";

function App() {
  return (
    <NumberField
      label="Label"
      placeholder="Placeholder"
      hint="Hint text"
      moreInfo="More info"
      size="large"
      required
      loading
      error={false}
      style={{ maxWidth: "180px" }}
    />
  );
}

export default App;
