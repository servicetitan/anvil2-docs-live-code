import { FieldLabel, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [isOpen, _setIsOpen] = useState(true);

  return (
    <Flex direction="column" gap="2">
      <FieldLabel
        htmlFor="tax-id"
        required
        moreInfo="Your tax ID is used for reporting purposes and may be required for certain transactions."
        moreInfoOpen={isOpen}
      >
        Tax ID
      </FieldLabel>
      <input id="tax-id" type="text" required />
    </Flex>
  );
}

export default App;
