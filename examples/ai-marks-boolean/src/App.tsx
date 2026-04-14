import { TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <TextField
      label="Customer Name"
      value="Christina Smith"
      labelProps={{ aiMark: true }}
    />
  );
}

export default App;
