import { Card, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Card flexDirection="column">
      <Flex direction="column" gap="3">
        <Text variant="headline" el="h1" size="small">
          Contact methods
        </Text>
        <Flex direction="column" gap="1">
          <Text variant="eyebrow" size="small">
            Phone
          </Text>
          <Text>(813) 364-0534</Text>
        </Flex>
        <Flex direction="column" gap="1">
          <Text variant="eyebrow" size="small">
            Fax
          </Text>
          <Text>(813) 364-0530</Text>
        </Flex>
        <Flex direction="column" gap="1">
          <Text variant="eyebrow" size="small">
            Email
          </Text>
          <Text>email.address123@gmail.com</Text>
        </Flex>
      </Flex>
    </Card>
  );
}

export default App;
