import { TimeField } from "@servicetitan/anvil2";

function App() {
  return (
    <TimeField
      label="Autorounding field"
      autoround
      description="Autorounding is enabled for this field"
      onChange={(change) => {
        console.log("Time changed:", change.time);
      }}
    />
  );
}

export default App;
