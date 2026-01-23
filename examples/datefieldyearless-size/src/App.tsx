import { DateFieldYearless, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" style={{ minWidth: "384px" }}>
      <DateFieldYearless label="Small" size="small" />
      <DateFieldYearless label="Medium" size="medium" />
      <DateFieldYearless label="Large" size="large" />
    </Flex>
  );
}

export default App;
