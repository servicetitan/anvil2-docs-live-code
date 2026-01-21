import { Alert } from "@servicetitan/anvil2";

function App() {
  return (
    <Alert status="success" title="[Process] [action]" onClose={console.log}>
      [Details such as date and time, next steps, etc.]
    </Alert>
  );
}

export default App;
