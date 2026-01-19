import { Announcement, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Flex direction="column" gap={4}>
      <Announcement
        status="warning"
        title="You have no credit card specified. Please add it before your service is suspended in 3 days."
      />

      {isOpen ? (
        <Announcement
          status="warning"
          title="You have no credit card specified. Please add it before your service is suspended in 3 days."
          onClose={() => setIsOpen(false)}
        />
      ) : (
        <Button
          size="large"
          onClick={() => setIsOpen(true)}
          style={{ width: "100%" }}
        >
          Open Announcement
        </Button>
      )}
    </Flex>
  );
}

export default App;
