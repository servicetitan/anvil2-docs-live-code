import { DateField } from "@servicetitan/anvil2";

function App() {
  return <DateField defaultValue={new Date().toISOString()} />;
}

export default App;
