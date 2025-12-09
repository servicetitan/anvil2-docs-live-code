import { FieldMessage, Flex, Divider } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="6">
      <FieldMessage hint="Hint text" description="Description text" />

      <Divider />

      <FieldMessage
        hint="Hint text"
        description="Description text"
        errorMessage="Please provide a valid email."
      />
    </Flex>
  );
}

export default App;
