import { Popover, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Flex justifyContent="center" style={{ paddingTop: "4rem" }}>
        <Popover placement="top" open={isOpen}>
          <Popover.Button onClick={() => setIsOpen((open) => !open)}>
            Toggle Popover
          </Popover.Button>
          <Popover.Content>Content</Popover.Content>
        </Popover>
      </Flex>
    </div>
  );
}

export default App;
