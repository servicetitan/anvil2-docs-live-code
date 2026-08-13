import { TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <TextField
      label="Brand"
      defaultValue="Fisher"
      labelProps={{
        aiMark: {
          type: "tooltip",
          content: "Enriched with AI.",
          triggerLabel: "AI information",
          props: { defaultOpen: true },
        },
      }}
    />
  );
}

export default App;
