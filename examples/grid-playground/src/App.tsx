import { Grid, Card } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      autoRows="minmax(3rem, auto)"
      rowGap="2"
      columnGap="4"
    >
      <Card background="stronger" gridColumn="1 / 6">
        1
      </Card>
      <Card background="stronger" gridColumn={1} gridRow="2 / 5">
        2
      </Card>
      <Card background="strong" gridColumn="2 / 5" gridRowStart={2}>
        3
      </Card>
      <Card background="stronger" gridColumn="5 / 6" gridRowStart={2}>
        4
      </Card>
      <Card background="strong" gridColumn="2 / 6" gridRow="3 / 5">
        5
      </Card>
    </Grid>
  );
}

export default App;
