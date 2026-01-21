import { FieldLabel, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [isOpen, _setIsOpen] = useState(false);

  return (
    <Flex direction="column" gap="2">
      <FieldLabel
        htmlFor="field"
        moreInfo="This tooltip can be controlled externally."
        moreInfoOpen={isOpen}
      >
        Controlled Label
      </FieldLabel>
    </Flex>
  );
}

export default App;
