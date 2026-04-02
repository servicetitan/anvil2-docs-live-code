import { DateFieldYearlessRange, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" style={{ maxWidth: 500 }}>
      <DateFieldYearlessRange label="**Bold** label" />
      <DateFieldYearlessRange label="*Italic* label" />
      <DateFieldYearlessRange label="***Bold and italic*** label" />
      <DateFieldYearlessRange label="==Highlight== label" />
      <DateFieldYearlessRange label="`Code` label" />
    </Flex>
  );
}

export default App;
