import { TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <TextField
      label="Username"
      defaultValue="acme-hq"
      prefix="@"
      hint="This handle needs review"
      isHighlighted
    />
  );
}

export default App;
