import { Text, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column">
      <Text size="large" variant="headline" el="h4">
        Headline Large
      </Text>
      <br />
      <Text size="large" variant="eyebrow">
        Eyebrow Large
      </Text>
      <Text size="large" variant="body">
        This is large BodyText component
      </Text>
    </Flex>
  );
}
export default App;
