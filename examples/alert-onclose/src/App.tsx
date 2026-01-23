import { Alert, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Flex direction="column" gap="4" flex="1">
      {isOpen ? (
        <Alert title="Closeable Alert" onClose={() => setIsOpen(false)} />
      ) : (
        <Button
          size="large"
          onClick={() => setIsOpen(true)}
          style={{ width: "100%" }}
        >
          Open Alert
        </Button>
      )}

      <Alert title="Alert without onClose" />
    </Flex>
  );
}

export default App;
