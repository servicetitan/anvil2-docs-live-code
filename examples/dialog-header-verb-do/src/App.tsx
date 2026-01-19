import { Text, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6" placeContent="center">
      <Text variant="headline" el="h1">
        Edit customer information
      </Text>
      <Text variant="headline" el="h1">
        Delete message?
      </Text>
      <Text variant="headline" el="h1">
        Discard unsaved changes?
      </Text>
    </Grid>
  );
}

export default App;
