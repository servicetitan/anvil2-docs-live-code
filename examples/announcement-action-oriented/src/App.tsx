import { Announcement, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Announcement title="Your web browser is not supported" status="danger">
      <Button size="small">Learn More</Button>
    </Announcement>
  );
}

export default App;
