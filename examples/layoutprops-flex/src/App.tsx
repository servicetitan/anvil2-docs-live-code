import { Flex, Avatar, Text, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="2" alignItems="center">
      <Avatar size="large" name="Charlie Sparks" />
      <Text variant="headline" el="h3" size="large">
        Charlie Sparks
      </Text>
      <Text alignSelf="flex-start">
        <strong>Role: </strong>Journeyman Electrician <br />
        <strong>Experience: </strong>13 years <br />
        <strong>Phone: </strong>402-555-6974 <br />
      </Text>
      {/* This flex is an Item and a Container */}
      <Flex alignSelf="stretch">
        <Button flexGrow="1">Message Technician</Button>
      </Flex>
    </Flex>
  );
}

export default App;
