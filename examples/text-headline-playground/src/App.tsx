import { Text, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid
      alignContent="center"
      style={{
        height: "80px",
      }}
    >
      <Text variant="headline" size="xlarge" el="h1">
        Headline
      </Text>
    </Grid>
  );
}

export default App;
