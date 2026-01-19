import { Button, Grid } from "@servicetitan/anvil2";
import Edit from "@servicetitan/anvil2/assets/icons/material/round/edit.svg";

function App() {
  return (
    <Grid
      templateColumns="repeat(1, 1fr)"
      gap="8"
      placeItems="center"
      flexGrow="1"
    >
      <Button>Text Width</Button>
      <Button style={{ width: "180px" }}>Set Width</Button>
      <Button style={{ width: "100%" }}>Container Width</Button>
      <Button icon={Edit} aria-label="edit" />
    </Grid>
  );
}

export default App;
