import { DateFieldYearlessRange, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" style={{ minWidth: "384px" }}>
      <DateFieldYearlessRange label="Small" size="small" />
      <DateFieldYearlessRange label="Medium" size="medium" />
      <DateFieldYearlessRange label="Large" size="large" />
    </Flex>
  );
}

export default App;
