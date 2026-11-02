import { useState } from "react";
import { Button } from "@servicetitan/anvil2";
import {
  TreeSelectMenuSync,
  type TreeSelectMenuValue,
} from "@servicetitan/anvil2/beta";

const options = [
  {
    id: "eng",
    label: "Engineering",
    children: [
      { id: "fe", label: "Frontend" },
      { id: "be", label: "Backend" },
      { id: "infra", label: "Infrastructure" },
    ],
  },
  {
    id: "design",
    label: "Design",
    children: [
      { id: "ux", label: "UX Design" },
      { id: "visual", label: "Visual Design" },
    ],
  },
  { id: "hr", label: "Human Resources" },
];

function App() {
  const [selected, setSelected] = useState<TreeSelectMenuValue[]>([]);

  return (
    <div style={{ width: 384 }}>
      <TreeSelectMenuSync
        label="Select departments"
        options={options}
        value={selected}
        onSelectedOptionsChange={setSelected}
        defaultExpandLevel={1}
        trigger={(props) => (
          <Button {...props}>
            {selected.length > 0
              ? `${selected.length} selected`
              : "Select departments"}
          </Button>
        )}
      />
    </div>
  );
}

export default App;
