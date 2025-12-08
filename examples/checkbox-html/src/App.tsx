import { Checkbox } from "@servicetitan/anvil2";

function App() {
  return (
    <Checkbox
      name="terms"
      label="I accept the terms and conditions."
      required
    />
  );
}

export default App;
