import { DateField } from "@servicetitan/anvil2";

function App() {
  return <DateField defaultValue={new Date().toISOString()} disableHint />;
}

export default App;
