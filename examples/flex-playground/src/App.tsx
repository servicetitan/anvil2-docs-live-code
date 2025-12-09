import { Flex, Avatar, Text, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="6">
      <Avatar name="Cory Sparks" size="large" status="online" />
      <Flex direction="column" grow="1">
        <Text variant="headline" el="h2" size="large">
          Cory Sparks
        </Text>
        <Text color="subdued">Electrician | Omaha, NE</Text>
      </Flex>
      <Flex direction="column" gap="2" alignSelf="center" alignItems="flex-end">
        <Button size="small" appearance="primary">
          View Profile
        </Button>
        <Button size="small">Edit Profile</Button>
      </Flex>
    </Flex>
  );
}

export default App;
