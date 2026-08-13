import { AiMark, TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <TextField
      label="Equipment Brand"
      defaultValue="Carrier"
      suffix={<AiMark type="gradient" />}
    />
  );
}

export default App;
