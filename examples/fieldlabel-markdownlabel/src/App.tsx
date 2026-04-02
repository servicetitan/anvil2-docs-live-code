import { FieldLabel, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4">
      <FieldLabel htmlFor="a">**Bold** label</FieldLabel>
      <FieldLabel htmlFor="b">*Italic* label</FieldLabel>
      <FieldLabel htmlFor="c">***Bold and italic*** label</FieldLabel>
      <FieldLabel htmlFor="d">==Highlight== label</FieldLabel>
      <FieldLabel htmlFor="e">`Code` label</FieldLabel>
    </Flex>
  );
}

export default App;
