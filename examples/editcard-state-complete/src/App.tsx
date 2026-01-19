import { EditCard, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex>
      <EditCard flexGrow="1" headerText="Complete Header" state="complete">
        Body content within the Edit Card.
      </EditCard>
    </Flex>
  );
}

export default App;
