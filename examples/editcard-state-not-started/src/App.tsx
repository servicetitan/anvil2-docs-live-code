import { EditCard, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex>
      <EditCard
        flexGrow="1"
        headerText="Not Started Header"
        state="not started"
      >
        Body content within the Edit Card.
      </EditCard>
    </Flex>
  );
}

export default App;
