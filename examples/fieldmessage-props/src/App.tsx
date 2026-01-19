import { FieldMessage, Flex, Divider } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="6">
      <FieldMessage
        hint="Hint text, should be max 1 line"
        description="Description text, can be max 3 lines explaining what the purpose of the field is to the user"
      />

      <Divider />

      <FieldMessage
        hint="Hint text"
        description="Description text, can be max 3 lines explaining what the purpose of the field is to the user"
        errorMessage="Field message in error state"
      />

      <Divider />

      <FieldMessage hint="Hint text only" />
    </Flex>
  );
}

export default App;
