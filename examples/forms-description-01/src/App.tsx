import { TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <TextField
      label="Password"
      type="password"
      hint="Must be at least 8 characters long."
    />
  );
}

export default App;
