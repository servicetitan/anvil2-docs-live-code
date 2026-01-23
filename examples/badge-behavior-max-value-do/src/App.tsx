import { Badge, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Button style={{ position: "relative" }}>
      Button
      <Badge aria-label="with 99+ unread">99+</Badge>
    </Button>
  );
}

export default App;
