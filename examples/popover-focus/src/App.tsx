import { Popover, Grid, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid
      placeItems="center"
      gap="1"
      templateColumns="repeat(3, 1fr)"
      style={{
        paddingTop: 100,
      }}
    >
      <Button>Unrelated Button</Button>
      <Popover placement="top" modal>
        <Popover.Button appearance="primary">Open to trap focus</Popover.Button>
        <Popover.Content style={{ display: "flex", gap: 20 }}>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </Popover.Content>
      </Popover>
      <Button>Unrelated Button</Button>
    </Grid>
  );
}

export default App;
