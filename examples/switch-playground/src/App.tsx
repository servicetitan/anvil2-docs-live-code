import { Switch } from "@servicetitan/anvil2";

function App() {
  return (
    <Switch
      label="Switch"
      value="example-switch"
      defaultChecked={true}
      onChange={(event, { value, checked }) => {
        console.log("\nevent:");
        console.log(event);
        console.log(`value: ${value}`);
        console.log(`checked: ${checked}`);
      }}
    />
  );
}

export default App;
