import { EditCard, Text, TextField, useEditCard } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Avery Chen");
  const [nextName, setNextName] = useState(name);
  const { state, onStateChange } = useEditCard({
    initialState: "complete",
    validator: () => nextName.trim().length > 0,
    onEdit: () => setNextName(name),
    onCancel: () => setNextName(name),
    onSave: () => setName(nextName.trim()),
  });

  return (
    <EditCard
      headerText={{
        "not started": "Add a contact",
        "in progress": "Edit contact",
        error: "Name is required",
        complete: "Contact saved",
      }}
      state={state}
      onStateChange={onStateChange}
    >
      {state === "in progress" ? (
        <TextField
          label="Name"
          value={nextName}
          onChange={(event) => setNextName(event.target.value)}
        />
      ) : (
        <Text>{name}</Text>
      )}
    </EditCard>
  );
}

export default App;
