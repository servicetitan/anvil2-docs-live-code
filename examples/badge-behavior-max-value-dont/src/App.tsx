import { Badge, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Button style={{ position: "relative" }}>
      Button
      <Badge aria-label="with 999999999 unread">999999999</Badge>
    </Button>
  );
}

export default App;
