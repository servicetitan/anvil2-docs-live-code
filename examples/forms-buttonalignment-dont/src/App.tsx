import { Grid, TextField, Flex, Button } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <Grid gap="6">
      <Flex
        gap="3"
        style={{
          marginBottom: core.primitive?.Size6?.value,
        }}
      >
        <Button appearance="primary">Submit</Button>
        <Button>Cancel</Button>
      </Flex>
      <Grid gap="6" templateColumns="1fr 1fr">
        <TextField label="First Name" />
        <TextField label="Last Name" />
      </Grid>
      <TextField label="Email Address" />
    </Grid>
  );
}

export default App;
