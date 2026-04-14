import { TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <TextField
      label="Customer concern"
      labelProps={{
        aiMark: {
          type: "tooltip",
          content:
            "Drafted from intake notes and history. Confirm wording before it goes to the homeowner.",
          triggerLabel: "How AI drafts this field",
        },
      }}
      value="Intermittent breaker trip"
    />
  );
}

export default App;
