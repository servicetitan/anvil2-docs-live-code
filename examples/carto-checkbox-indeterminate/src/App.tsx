import { useState } from "react";
import { Checkbox } from "@servicetitan/carto-react-kit";

function App() {
  const [completed, setCompleted] = useState(true);
  const [cancelled, setCancelled] = useState(false);
  const allSelected = completed && cancelled;
  const someSelected = completed || cancelled;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Checkbox
        label="Select all"
        isSelected={allSelected}
        isIndeterminate={someSelected && !allSelected}
        onChange={(isSelected) => {
          setCompleted(isSelected);
          setCancelled(isSelected);
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          paddingLeft: 24,
        }}
      >
        <Checkbox
          label="Include completed jobs"
          isSelected={completed}
          onChange={setCompleted}
        />
        <Checkbox
          label="Include cancelled jobs"
          isSelected={cancelled}
          onChange={setCancelled}
        />
      </div>
    </div>
  );
}

export default App;
