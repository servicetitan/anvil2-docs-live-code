import { Announcement, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Announcement title="Unable to connect to the internet" status="danger">
      <Button size="small">Retry</Button>
    </Announcement>
  );
}

export default App;
