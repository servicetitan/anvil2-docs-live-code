import { Announcement, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Announcement
      status="warning"
      title="Your account needs a default credit card."
      onClose={console.log}
    >
      <Button size="small">Add default card</Button>
    </Announcement>
  );
}

export default App;
