import { useState } from "react";
import { IconPencil } from "@servicetitan/anvil2-icons";
import { ButtonToggle } from "@servicetitan/anvil2-ai-kit";

function App() {
  const [selected, setSelected] = useState(false);

  return (
    <ButtonToggle
      label="Edit mode"
      icon={<IconPencil />}
      isSelected={selected}
      onChange={setSelected}
    />
  );
}

export default App;
