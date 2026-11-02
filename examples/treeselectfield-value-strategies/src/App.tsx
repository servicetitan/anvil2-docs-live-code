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
  const [leafPriority, setLeafPriority] = useState<TreeSelectFieldValue[]>([]);
  const [branchPriority, setBranchPriority] = useState<TreeSelectFieldValue[]>(
    [],
  );
  const [allValue, setAllValue] = useState<TreeSelectFieldValue[]>([]);

  return (
    <Flex direction="column" gap="4" style={{ maxWidth: 384 }}>
      <TreeSelectFieldSync
        selectionMode="linked"
        valueConsistsOf="LEAF_PRIORITY"
        label="Leaf priority (default)"
        options={options}
        value={leafPriority}
        onSelectedOptionsChange={setLeafPriority}
        defaultExpandLevel={1}
      />
      <TreeSelectFieldSync
        selectionMode="linked"
        valueConsistsOf="BRANCH_PRIORITY"
        label="Branch priority"
        options={options}
        value={branchPriority}
        onSelectedOptionsChange={setBranchPriority}
        defaultExpandLevel={1}
      />
      <TreeSelectFieldSync
        selectionMode="linked"
        valueConsistsOf="ALL"
        label="All nodes"
        options={options}
        value={allValue}
        onSelectedOptionsChange={setAllValue}
        defaultExpandLevel={1}
      />
    </Flex>
  );
}

export default App;
