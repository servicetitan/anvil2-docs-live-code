import { TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <TextField
      label="Equipment Brand"
      defaultValue="Carrier"
      labelProps={{
        aiMark: {
          type: "tooltip",
          content: "Deduced from the equipment's model number.",
          triggerLabel: "How the equipment brand was deduced",
        },
      }}
    />
  );
}

export default App;
