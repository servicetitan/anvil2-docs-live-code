import { Grid, TextField, Flex, Button } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <Grid gap="6">
      <Grid gap="6" templateColumns="1fr 1fr">
        <TextField label="First Name" />
        <TextField label="Last Name" />
      </Grid>
      <TextField label="Email Address" />

      <Flex
        gap="3"
        style={{
          marginTop: core.primitive?.Size6?.value,
        }}
      >
        <Button appearance="primary">Submit</Button>
        <Button>Cancel</Button>
      </Flex>
    </Grid>
  );
}

export default App;
