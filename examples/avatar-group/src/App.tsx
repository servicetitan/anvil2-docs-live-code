import { Avatar } from "@servicetitan/anvil2";

function App() {
  return (
    <Avatar.Group>
      <Avatar name="Sam" size="large" status="online" />
      <Avatar name="Priscilla" size="large" status="online" />
      <Avatar name="Henry" size="large" status="offline" />
    </Avatar.Group>
  );
}

export default App;
