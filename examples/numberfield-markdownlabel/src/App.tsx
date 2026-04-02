import { Flex, NumberField } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" style={{ maxWidth: 400 }}>
      <NumberField label="**Bold** label" />
      <NumberField label="*Italic* label" />
      <NumberField label="***Bold and italic*** label" />
      <NumberField label="==Highlight== label" />
      <NumberField label="`Code` label" />
    </Flex>
  );
}

export default App;
