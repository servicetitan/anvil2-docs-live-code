import { TimeField } from "@servicetitan/anvil2";

function App() {
  return (
    <TimeField
      label="Label"
      onChange={(change) => {
        console.log("Time changed:", change.time);
      }}
    />
  );
}

export default App;
