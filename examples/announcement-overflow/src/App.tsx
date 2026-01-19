import { Announcement, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={4}>
      <Announcement title="Announcement text will truncate instead of wrap">
        <Button size="small">Button</Button>
      </Announcement>
      <div style={{ maxWidth: "450px" }}>
        <Announcement title="Announcement text will truncate instead of wrap">
          <Button size="small">Button</Button>
        </Announcement>
      </div>
    </Flex>
  );
}

export default App;
