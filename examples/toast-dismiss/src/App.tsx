import { toast, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [latestToastId, setLatestToastId] = useState<string | null>(null);

  const config = {
    title: "Title",
    message: "Lorem ipsum dolor sit amet.",
  };

  return (
    <div style={{ minHeight: "284px" }}>
      <Flex gap="2">
        <Button
          onClick={() => setLatestToastId(toast.info(config))}
          appearance="primary"
        >
          Show toast
        </Button>
        <Button onClick={() => latestToastId && toast.dismiss(latestToastId)}>
          Dismiss latest toast
        </Button>
        <Button onClick={() => toast.dismiss()}>Dismiss all toasts</Button>
      </Flex>
    </div>
  );
}

export default App;
