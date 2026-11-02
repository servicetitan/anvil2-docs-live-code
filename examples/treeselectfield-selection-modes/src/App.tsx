import { useState } from "react";
import { Flex } from "@servicetitan/anvil2";
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
    ],
  },
  {
    id: "design",
    label: "Design",
    children: [
      { id: "ux", label: "UX" },
      { id: "visual", label: "Visual" },
    ],
  },
];

function App() {
  const [linkedValue, setLinkedValue] = useState<TreeSelectFieldValue[]>([]);
  const [independentValue, setIndependentValue] = useState<
    TreeSelectFieldValue[]
  >([]);
  const [singleValue, setSingleValue] = useState<TreeSelectFieldValue[]>([]);

  return (
    <Flex direction="column" gap="4" style={{ maxWidth: 384 }}>
      <TreeSelectFieldSync
        selectionMode="linked"
        label="Linked (cascading)"
        options={options}
        value={linkedValue}
        onSelectedOptionsChange={setLinkedValue}
        defaultExpandLevel={1}
      />
      <TreeSelectFieldSync
        selectionMode="independent"
        label="Independent (no cascade)"
        options={options}
        value={independentValue}
        onSelectedOptionsChange={setIndependentValue}
        defaultExpandLevel={1}
      />
      <TreeSelectFieldSync
        selectionMode="single"
        label="Single select"
        options={options}
        value={singleValue}
        onSelectedOptionsChange={setSingleValue}
        defaultExpandLevel={1}
      />
    </Flex>
  );
}

export default App;
