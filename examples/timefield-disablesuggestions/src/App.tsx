import { TimeField } from "@servicetitan/anvil2";

function App() {
  return (
    <TimeField
      label="Field without suggestions"
      disableSuggestions
      onChange={(change) => {
        console.log("Time changed:", change.time);
      }}
    />
  );
}

export default App;
