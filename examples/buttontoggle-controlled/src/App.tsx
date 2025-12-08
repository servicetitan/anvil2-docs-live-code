import { ButtonToggle } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <ButtonToggle
      checked={isChecked}
      onClick={() => setIsChecked((prev) => !prev)}
    >
      Click to Toggle
    </ButtonToggle>
  );
}

export default App;
