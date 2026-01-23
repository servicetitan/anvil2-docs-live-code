import { Announcement, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={4} grow={1}>
      <Announcement status="info" title="Info announcement" />
      <Announcement status="warning" title="Warning announcement" />
      <Announcement status="danger" title="Danger announcement" />
    </Flex>
  );
}

export default App;
