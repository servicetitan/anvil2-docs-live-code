import { FieldLabel, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="2">
      <FieldLabel htmlFor="email">Email Address</FieldLabel>
      <input id="email" type="email" />
    </Flex>
  );
}

export default App;
