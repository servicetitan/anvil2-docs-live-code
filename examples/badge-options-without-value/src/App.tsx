import { Badge, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Button style={{ position: "relative" }}>
      Button
      <Badge aria-label="has unread notifications" />
    </Button>
  );
}

export default App;
