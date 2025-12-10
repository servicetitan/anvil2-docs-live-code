import { TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <TextField
      label="Label"
      placeholder="Placeholder"
      maxLength={180}
      showCounter
    />
  );
}

export default App;
