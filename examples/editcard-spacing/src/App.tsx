import { EditCard, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={6}>
      <EditCard headerText="Edit Card" state="not started" />
      <EditCard headerText="Edit Card" state="not started" />
      <EditCard headerText="Edit Card" state="not started" />
    </Flex>
  );
}

export default App;
