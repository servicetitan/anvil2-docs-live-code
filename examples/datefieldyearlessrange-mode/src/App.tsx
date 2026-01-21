import { DateFieldYearlessRange, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" style={{ minWidth: "384px" }}>
      {/** US format (default) */}
      <DateFieldYearlessRange label="US Format" mode="mm/dd" />

      {/** International format */}
      <DateFieldYearlessRange label="International Format" mode="dd/mm" />
    </Flex>
  );
}

export default App;
