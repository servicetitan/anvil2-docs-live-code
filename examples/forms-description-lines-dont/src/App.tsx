import { TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <TextField
      label="Office Phone"
      description="Employee contact number. When an employee clicks a customer’s number to make an outbound call, this is the number that ServiceTitan dials. This cannot be a ServiceTitan tracking number."
    />
  );
}

export default App;
