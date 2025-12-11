import { Dnd, Card, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Card gap="4">
      <Dnd.HandleButton />
      <Button>Action</Button>
    </Card>
  );
}

export default App;
