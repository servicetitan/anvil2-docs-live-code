import { DateFieldYearless, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" style={{ maxWidth: 400 }}>
      <DateFieldYearless label="**Bold** label" />
      <DateFieldYearless label="*Italic* label" />
      <DateFieldYearless label="***Bold and italic*** label" />
      <DateFieldYearless label="==Highlight== label" />
      <DateFieldYearless label="`Code` label" />
    </Flex>
  );
}

export default App;
