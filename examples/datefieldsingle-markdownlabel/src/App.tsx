import { DateFieldSingle, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" style={{ maxWidth: 400 }}>
      <DateFieldSingle label="**Bold** label" />
      <DateFieldSingle label="*Italic* label" />
      <DateFieldSingle label="***Bold and italic*** label" />
      <DateFieldSingle label="==Highlight== label" />
      <DateFieldSingle label="`Code` label" />
    </Flex>
  );
}

export default App;
