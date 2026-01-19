import { Announcement, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={4}>
      <Announcement title="Info announcement">
        <Button size="small">Button</Button>
      </Announcement>
      <Announcement status="warning" title="Warning announcement">
        <Button size="small">Button</Button>
      </Announcement>
      <Announcement status="danger" title="Danger announcement">
        <Button size="small">Button</Button>
      </Announcement>
    </Flex>
  );
}

export default App;
