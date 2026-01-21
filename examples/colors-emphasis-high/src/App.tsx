import { Flex, Announcement, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4">
      <Announcement
        status="danger"
        title="Announcement title"
        onClose={console.log}
      />
      <Button appearance="primary">Button</Button>
    </Flex>
  );
}

export default App;
