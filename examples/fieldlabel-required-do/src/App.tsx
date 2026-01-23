import { FieldLabel, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="2">
      <FieldLabel htmlFor="name" required>
        Full Name
      </FieldLabel>
      <input id="name" type="text" required />
    </Flex>
  );
}

export default App;
