import { TimeField } from "@servicetitan/anvil2";

function App() {
  return (
    <TimeField
      label="Field with step suggestions"
      step={30}
      onChange={(change) => {
        console.log("Time changed:", change.time);
      }}
    />
  );
}

export default App;
