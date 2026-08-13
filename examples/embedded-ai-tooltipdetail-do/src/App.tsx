import { TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <TextField
      label="Brand"
      defaultValue="Fisher"
      labelProps={{
        aiMark: {
          type: "tooltip",
          content: "Identified based on available equipment data.",
          triggerLabel: "How the brand was identified",
          props: { defaultOpen: true },
        },
      }}
    />
  );
}

export default App;
