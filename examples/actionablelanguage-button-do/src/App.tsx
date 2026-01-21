import { Button, Grid, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid templateColumns="repeat(1, max-content)" gap="12">
      <Flex gap="4">
        <Button appearance="primary">Start free trial</Button>
      </Flex>
    </Grid>
  );
}

export default App;
