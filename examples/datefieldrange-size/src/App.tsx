import { DateFieldRange, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" style={{ minWidth: "384px" }}>
      <DateFieldRange label="Small" size="small" />
      <DateFieldRange label="Medium" size="medium" />
      <DateFieldRange label="Large" size="large" />
    </Flex>
  );
}

export default App;
