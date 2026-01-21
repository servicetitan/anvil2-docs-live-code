import { Text, Flex, Divider, TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column">
      <Text size="small" variant="headline" el="h4">
        Headline Large
      </Text>
      <Text size="small" variant="body">
        This is large BodyText component
      </Text>
      <Divider spacing="2" />
      <Text size="small" variant="headline" el="h4">
        Headline Large
      </Text>
      <br />
      <Text size="small" variant="eyebrow">
        Eyebrow Large
      </Text>
      <Text size="small" variant="body">
        This is large BodyText component
      </Text>
      <br />
      <TextField size="small" label="First Name" />
    </Flex>
  );
}
export default App;
