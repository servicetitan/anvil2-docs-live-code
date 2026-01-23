import { Card, Flex, Checkbox, Text, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" style={{ maxWidth: "30rem" }}>
      <Card>This is a Card that just has text in it.</Card>

      <Flex>
        <Card flex={1} padding="large">
          <Checkbox.Group legend="Group label">
            <Checkbox label="Option 1" />
            <Checkbox label="Option 2" defaultChecked />
            <Checkbox label="Option 3" defaultChecked />
          </Checkbox.Group>
        </Card>
      </Flex>

      <Card flexDirection="column">
        <Flex gap={4} direction="column">
          <Flex direction="column">
            <Text variant="headline" size="medium" el="h2">
              Headline text
            </Text>
            <Text variant="body">
              Description of the lorem ipsum dolar emit molestiae reprehenderit
              iste ipsam et velit ab. Eum est et corporis quia voluptatem.
            </Text>
          </Flex>
          <Button>Get started</Button>
        </Flex>
      </Card>
    </Flex>
  );
}

export default App;
