import { Flex, TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="row" gap="2" style={{ maxWidth: 500 }}>
      <TextField label="First name" hideLabel placeholder="First name" />
      <TextField label="Last name" hideLabel placeholder="Last name" />
    </Flex>
  );
}

export default App;
