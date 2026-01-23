import { DateFieldSingle, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" style={{ minWidth: "384px" }}>
      {/** US format (default) */}
      <DateFieldSingle label="US Format" mode="mm/dd/yyyy" />

      {/** International format */}
      <DateFieldSingle label="International Format" mode="dd/mm/yyyy" />
    </Flex>
  );
}

export default App;
