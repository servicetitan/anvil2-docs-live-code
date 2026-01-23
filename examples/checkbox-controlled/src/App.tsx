import { Checkbox, type CheckboxState } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [list, setList] = useState([
    {
      label: "Email",
      checked: false,
    },
    {
      label: "Text",
      checked: true,
    },
  ]);

  const handleUpdate = (state: CheckboxState, index: number) => {
    const newArr = [...list];
    newArr[index].checked = !state.checked;
    setList(newArr);
  };

  return (
    <Checkbox.Group legend="Preferred method(s) of communcation" required>
      {list.map((item, i) => {
        return (
          <Checkbox
            key={i}
            checked={item.checked}
            label={item.label}
            onClick={(_e, state) => state && handleUpdate(state, i)}
          />
        );
      })}
    </Checkbox.Group>
  );
}

export default App;
