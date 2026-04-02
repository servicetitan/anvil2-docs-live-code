import { DateFieldRange, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" style={{ maxWidth: 500 }}>
      <DateFieldRange label="**Bold** label" />
      <DateFieldRange label="*Italic* label" />
      <DateFieldRange label="***Bold and italic*** label" />
      <DateFieldRange label="==Highlight== label" />
      <DateFieldRange label="`Code` label" />
    </Flex>
  );
}

export default App;
