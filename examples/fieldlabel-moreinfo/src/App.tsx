import { FieldLabel, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [isOpen, _setIsOpen] = useState(true);

  return (
    <Flex direction="column" gap="2">
      <FieldLabel
        htmlFor="password"
        required
        moreInfo="Password must be at least 8 characters and include a number."
        moreInfoOpen={isOpen}
      >
        Password
      </FieldLabel>
      <input id="password" type="password" required />
    </Flex>
  );
}

export default App;
