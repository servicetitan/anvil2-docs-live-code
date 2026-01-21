import { TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <TextField
      label="Shipping Address"
      description="This address will be used to deliver your order"
      required
      error="Please enter your street address"
    />
  );
}

export default App;
