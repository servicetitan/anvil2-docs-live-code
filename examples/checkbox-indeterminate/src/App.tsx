import { Checkbox, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

type ListItem = {
  label: string;
  checked: boolean;
  indeterminate?: boolean;
  childrenNodes?: ListItem[];
};

function App() {
  const [list, setList] = useState<ListItem[]>([
    {
      label: "Income statement",
      checked: false,
      childrenNodes: [
        {
          label: "Income",
          checked: false,
        },
        {
          label: "Expense",
          checked: false,
        },
      ],
    },
    {
      label: "Balance sheet",
      checked: true,
      indeterminate: true,
      childrenNodes: [
        {
          label: "Asset",
          checked: true,
        },
        {
          label: "Liabilities",
          checked: false,
        },
      ],
    },
  ]);

  // Note: this only works with 2 level
  const handleUpdate = (position: number, parent?: number) => {
    const newArr = [...list];
    if (typeof parent != "undefined") {
      const childrenNodes = newArr[parent].childrenNodes;
      if (
        childrenNodes &&
        Array.isArray(childrenNodes) &&
        childrenNodes.length > 0
      ) {
        childrenNodes[position].checked = !childrenNodes[position].checked;
        newArr[parent].childrenNodes = childrenNodes;

        // Check parent if all childrenNodes are checked
        if (childrenNodes.every((item) => item.checked)) {
          newArr[parent].indeterminate = false;
          newArr[parent].checked = true;
        }
        // Indeterminate parent if childrenNodes are partially checked
        else if (childrenNodes.some((item) => item.checked === true)) {
          newArr[parent].indeterminate = true;
        }

        // Uncheck parent if all childrenNodes are unchecked
        else if (childrenNodes.every((item) => item.checked === false)) {
          newArr[parent].checked = false;
          newArr[parent].indeterminate = false;
        }
      }
    } else {
      if (newArr[position].childrenNodes) {
        const newState = !newArr[position].checked;
        newArr[position].checked = newState;
        newArr[position].indeterminate = false;
        newArr[position].childrenNodes?.forEach(
          (item) => (item.checked = newState),
        );
      } else {
        newArr[position].checked = !newArr[position].checked;
      }
    }
    setList(newArr);
  };

  const createNodes = (list: ListItem[], parent?: number) => {
    return (
      <ul style={{ listStyle: "none", paddingInlineStart: 0 }}>
        {list.map((item, i) => {
          return (
            <li key={i}>
              <Checkbox
                indeterminate={item.indeterminate}
                checked={item.checked}
                label={item.label}
                onClick={() => handleUpdate(i, parent)}
              />
              {item.childrenNodes &&
                Array.isArray(item.childrenNodes) &&
                item.childrenNodes.length > 0 &&
                createNodes(item.childrenNodes, i)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <Flex direction="column" gap="4">
      {createNodes(list)}
    </Flex>
  );
}

export default App;
