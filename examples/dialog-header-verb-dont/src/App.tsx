import { Text, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6" placeContent="center">
      <Text variant="headline" el="h1">
        Edit the service agreement for this customer
      </Text>
      <Text variant="headline" el="h1">
        Are you sure you want to remove the invoice?
      </Text>
      <Text variant="headline" el="h1">
        Delete?
      </Text>
    </Grid>
  );
}

export default App;
