import { toast, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [toastId, setToastId] = useState<string | null>(null);

  const config = {
    title: "Title",
    message: "Lorem ipsum dolor sit amet.",
    onClose: () => setToastId(null),
  };

  const updatedConfig = {
    title: "New title",
    message: "Woah, it changed!",
  };

  return (
    <div style={{ minHeight: "284px" }}>
      <Flex gap="2">
        <Button
          onClick={() => setToastId(toast.info(config))}
          disabled={toastId !== null}
          appearance="primary"
        >
          Show toast
        </Button>
        <Button onClick={() => toastId && toast.update(toastId, updatedConfig)}>
          Update toast
        </Button>
      </Flex>
    </div>
  );
}

export default App;
