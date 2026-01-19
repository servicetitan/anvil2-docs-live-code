import { Alert } from "@servicetitan/anvil2";

function App() {
  return (
    <Alert status="warning" title="Document theme limit has been reached">
      You have reached your theme limit. Your document template has reached its
      maximum of 20 themes. To add more themes, delete themes you’re no longer
      using.
    </Alert>
  );
}

export default App;
