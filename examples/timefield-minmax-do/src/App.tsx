import { TimeField } from "@servicetitan/anvil2";

function App() {
  return (
    <TimeField
      label="Field with min/max/autoround"
      min="09:00 AM"
      max="05:00 PM"
      description="Enter a time between 09:00 AM and 05:00 PM."
      onChange={(change) => {
        console.log("Time changed:", change.time);
      }}
    />
  );
}

export default App;
