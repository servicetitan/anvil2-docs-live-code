import { Text, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column">
      <Text variant="headline" el="h4">
        Headline Default
      </Text>
      <br />
      <Text variant="eyebrow">Eyebrow Default</Text>
      <Text variant="body">This is default BodyText component</Text>
    </Flex>
  );
}
export default App;
