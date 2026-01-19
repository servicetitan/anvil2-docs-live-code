import { Alert } from "@servicetitan/anvil2";

function App() {
  return (
    <Alert status="warning" title="Document theme limit has been reached">
      Delete unused themes to add more
    </Alert>
  );
}

export default App;
