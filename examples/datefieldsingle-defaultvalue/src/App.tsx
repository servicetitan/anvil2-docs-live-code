import { DateFieldSingle } from "@servicetitan/anvil2";

function App() {
  return <DateFieldSingle defaultValue={new Date().toISOString()} />;
}

export default App;
