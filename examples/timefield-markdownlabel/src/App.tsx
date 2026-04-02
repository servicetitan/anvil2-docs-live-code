import { Flex, TimeField } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" style={{ maxWidth: 400 }}>
      <TimeField label="**Bold** label" />
      <TimeField label="*Italic* label" />
      <TimeField label="***Bold and italic*** label" />
      <TimeField label="==Highlight== label" />
      <TimeField label="`Code` label" />
    </Flex>
  );
}

export default App;
