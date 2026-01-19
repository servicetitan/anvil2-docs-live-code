import { Alert } from "@servicetitan/anvil2";

function App() {
  return (
    <Alert status="danger" title="Unable to process your request">
      We were unable to process your request.
      <ul>
        <li>The document template has a maximum of 20 themes.</li>
        <li>Your document title is limited to 100 characters.</li>
      </ul>
    </Alert>
  );
}

export default App;
