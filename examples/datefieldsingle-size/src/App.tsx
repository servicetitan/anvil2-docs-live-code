import { DateFieldSingle, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" style={{ minWidth: "384px" }}>
      <DateFieldSingle label="Small" size="small" />
      <DateFieldSingle label="Medium" size="medium" />
      <DateFieldSingle label="Large" size="large" />
    </Flex>
  );
}

export default App;
