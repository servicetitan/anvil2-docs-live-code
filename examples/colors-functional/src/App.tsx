import { Alert } from "@servicetitan/anvil2";

function App() {
  return (
    <Alert
      status="success"
      title="Success!"
      onClose={() => console.log("You closed the alert")}
    >
      Alert Title
    </Alert>
  );
}

export default App;
