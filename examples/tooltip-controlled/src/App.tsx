import { Tooltip, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ minHeight: "284px" }}>
      <Flex justifyContent="center">
        <Tooltip open={open}>
          <Tooltip.Trigger>
            <Button
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              Click to toggle
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content>This is a tooltip!</Tooltip.Content>
        </Tooltip>
      </Flex>
    </div>
  );
}

export default App;
