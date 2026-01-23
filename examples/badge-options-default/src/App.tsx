import { Badge, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Button style={{ position: "relative" }}>
      Button
      <Badge aria-label="with 6 unread">6</Badge>
    </Button>
  );
}

export default App;
