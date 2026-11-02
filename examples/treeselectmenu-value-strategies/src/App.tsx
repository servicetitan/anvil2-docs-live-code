import { useState } from "react";
import { Button, Flex } from "@servicetitan/anvil2";
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
  const [leafPriority, setLeafPriority] = useState<TreeSelectMenuValue[]>([]);
  const [branchPriority, setBranchPriority] = useState<TreeSelectMenuValue[]>(
    [],
  );
  const [allValue, setAllValue] = useState<TreeSelectMenuValue[]>([]);

  return (
    <Flex direction="column" gap="3" style={{ maxWidth: 384 }}>
      <TreeSelectMenuSync
        selectionMode="linked"
        valueConsistsOf="LEAF_PRIORITY"
        label="Leaf priority (default)"
        options={options}
        value={leafPriority}
        onSelectedOptionsChange={setLeafPriority}
        defaultExpandLevel={1}
        trigger={(props) => (
          <Button {...props}>
            {leafPriority.length > 0
              ? `Leaf priority: ${leafPriority.length}`
              : "Leaf priority"}
          </Button>
        )}
      />
      <TreeSelectMenuSync
        selectionMode="linked"
        valueConsistsOf="BRANCH_PRIORITY"
        label="Branch priority"
        options={options}
        value={branchPriority}
        onSelectedOptionsChange={setBranchPriority}
        defaultExpandLevel={1}
        trigger={(props) => (
          <Button {...props}>
            {branchPriority.length > 0
              ? `Branch priority: ${branchPriority.length}`
              : "Branch priority"}
          </Button>
        )}
      />
      <TreeSelectMenuSync
        selectionMode="linked"
        valueConsistsOf="ALL"
        label="All nodes"
        options={options}
        value={allValue}
        onSelectedOptionsChange={setAllValue}
        defaultExpandLevel={1}
        trigger={(props) => (
          <Button {...props}>
            {allValue.length > 0 ? `All: ${allValue.length}` : "All nodes"}
          </Button>
        )}
      />
    </Flex>
  );
}

export default App;
