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
  const [linkedValue, setLinkedValue] = useState<TreeSelectMenuValue[]>([]);
  const [independentValue, setIndependentValue] = useState<
    TreeSelectMenuValue[]
  >([]);
  const [singleValue, setSingleValue] = useState<TreeSelectMenuValue[]>([]);

  return (
    <Flex direction="column" gap="3" style={{ maxWidth: 384 }}>
      <TreeSelectMenuSync
        selectionMode="linked"
        label="Linked (cascading)"
        options={options}
        value={linkedValue}
        onSelectedOptionsChange={setLinkedValue}
        defaultExpandLevel={1}
        trigger={(props) => (
          <Button {...props}>
            {linkedValue.length > 0
              ? `Linked: ${linkedValue.length}`
              : "Linked"}
          </Button>
        )}
      />
      <TreeSelectMenuSync
        selectionMode="independent"
        label="Independent (no cascade)"
        options={options}
        value={independentValue}
        onSelectedOptionsChange={setIndependentValue}
        defaultExpandLevel={1}
        trigger={(props) => (
          <Button {...props}>
            {independentValue.length > 0
              ? `Independent: ${independentValue.length}`
              : "Independent"}
          </Button>
        )}
      />
      <TreeSelectMenuSync
        selectionMode="single"
        label="Single select"
        options={options}
        value={singleValue}
        onSelectedOptionsChange={setSingleValue}
        defaultExpandLevel={1}
        trigger={(props) => (
          <Button {...props}>
            {singleValue.length > 0 ? singleValue[0].label : "Single"}
          </Button>
        )}
      />
    </Flex>
  );
}

export default App;
