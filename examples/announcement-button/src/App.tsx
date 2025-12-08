import { Announcement, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <Announcement
      status="warning"
      title="You have no credit card specified. Please add it before your service is suspended in 3 days."
    >
      <Button size="small">Add Credit Card</Button>
    </Announcement>
  );
}

export default App;
