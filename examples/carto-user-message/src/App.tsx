import { UserMessage } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <UserMessage
      content="Hey — can you take a look at this?"
      timestamp={new Date(2026, 3, 1, 16, 40)}
    />
  );
}

export default App;
