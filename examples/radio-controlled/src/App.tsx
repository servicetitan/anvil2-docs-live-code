import { Radio, RadioGroup, type RadioState } from "@servicetitan/anvil2";
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

  const handleUpdate = (_state: RadioState | undefined, index: number) => {
    setList((prev) =>
      prev.map((item, i) => ({
        label: item.label,
        checked: index === i,
      })),
    );
  };

  return (
    <RadioGroup legend="Preferred communication method" required>
      {list.map((item, i) => {
        return (
          <Radio
            key={i}
            checked={item.checked}
            label={item.label}
            onChange={(_e, state) => handleUpdate(state, i)}
          />
        );
      })}
    </RadioGroup>
  );
}

export default App;
