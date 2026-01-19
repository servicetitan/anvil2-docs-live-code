import { Button, Grid, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(1, max-content)" gap="12">
      <Flex gap="3">
        <Button appearance="primary">Primary</Button>
        <Button>Secondary</Button>
      </Flex>
      <Flex gap="3">
        <Button appearance="primary">Primary</Button>
        <Button appearance="ghost">Ghost</Button>
      </Flex>
      <Flex gap="3">
        <Button>Secondary</Button>
        <Button>Secondary</Button>
      </Flex>
      <Flex gap="3">
        <Button>Secondary</Button>
        <Button appearance="ghost">Ghost</Button>
      </Flex>
      <Flex gap="3">
        <Button appearance="ghost">Ghost</Button>
        <Button appearance="ghost">Ghost</Button>
      </Flex>
    </Grid>
  );
}

export default App;
