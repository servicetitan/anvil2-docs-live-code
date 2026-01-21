import { FieldLabel, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="6">
      <FieldLabel htmlFor="field">Label</FieldLabel>

      <fieldset>
        <FieldLabel el="legend" required>
          Payment Method
        </FieldLabel>
      </fieldset>
    </Flex>
  );
}

export default App;
