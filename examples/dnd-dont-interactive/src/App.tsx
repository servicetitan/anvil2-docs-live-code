import { Dnd, Card, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Button>
      <Card>
        <Dnd.Handle />
        <Button>Action</Button>
      </Card>
    </Button>
  );
}

export default App;
