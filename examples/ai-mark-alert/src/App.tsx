import { Alert } from "@servicetitan/anvil2";

function App() {
  return (
    <Alert
      title="Suggested upsell"
      status="info"
      aiMark
      style={{ maxWidth: "550px" }}
    >
      Customer asked about indoor air quality—consider adding a media filter
      upgrade and UV option to this HVAC maintenance estimate.
    </Alert>
  );
}

export default App;
