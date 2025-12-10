import { TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <TextField
      label="Label"
      placeholder="Placeholder"
      hint="Hint text"
      moreInfo="More info"
      size="large"
      required
      loading
      error={false}
    />
  );
}

export default App;
