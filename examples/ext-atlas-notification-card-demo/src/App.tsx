import { NotificationCard } from "@servicetitan/anvil2-ext-atlas";
import { Card, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={4} style={{ width: "388px" }}>
      <Card flexDirection="column" gap={2} background="strong">
        <NotificationCard
          title="New Message"
          message="You have a new message from John Doe"
          timestamp="2 hours ago"
          unread={false}
          onClick={() => console.log("notification clicked")}
        />
      </Card>

      <Card flexDirection="column" gap={2} background="strong">
        <NotificationCard
          title="Important Update"
          message="Your account settings have been updated"
          timestamp="Just now"
          unread={true}
          onClick={() => console.log("notification clicked")}
        />
      </Card>
    </Flex>
  );
}

export default App;
