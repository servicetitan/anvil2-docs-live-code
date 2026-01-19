import { TimeField } from "@servicetitan/anvil2";

function App() {
  return (
    <TimeField
      label="Time Field with Initial Value"
      step={60}
      value="09:00AM"
      onChange={(change) => {
        // change function
        console.log("Time changed:", change.time);
      }}
    />
  );
}

export default App;
