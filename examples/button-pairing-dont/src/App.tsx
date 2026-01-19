import { Button, Grid, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(1, max-content)" gap="12">
      <Flex gap="3">
        <Button appearance="primary">Primary</Button>
        <Button appearance="primary">Primary</Button>
      </Flex>
      <Flex gap="3">
        <Button appearance="danger">Danger</Button>
        <Button appearance="danger">Danger</Button>
      </Flex>
    </Grid>
  );
}

export default App;
