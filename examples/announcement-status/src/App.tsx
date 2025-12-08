import { Announcement, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={4}>
      <Announcement status="info" title="We did this thing, check it out!" />
      <Announcement
        status="warning"
        title="You might want to think twice before doing that..."
      />
      <Announcement
        status="danger"
        title="Oh boy, things are really messed up now."
      />
    </Flex>
  );
}

export default App;
