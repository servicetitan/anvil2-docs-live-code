import { Badge, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Button style={{ position: "relative" }}>
      Button
      <Badge aria-label="with new notification">New Item</Badge>
    </Button>
  );
}

export default App;
