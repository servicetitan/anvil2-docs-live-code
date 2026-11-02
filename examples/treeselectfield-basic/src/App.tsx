import { useState } from "react";
import {
  TreeSelectFieldSync,
  type TreeSelectFieldValue,
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
  const [selected, setSelected] = useState<TreeSelectFieldValue[]>([]);

  return (
    <div style={{ width: 384 }}>
      <TreeSelectFieldSync
        label="Select departments"
        options={options}
        value={selected}
        onSelectedOptionsChange={setSelected}
        defaultExpandLevel={1}
      />
    </div>
  );
}

export default App;
