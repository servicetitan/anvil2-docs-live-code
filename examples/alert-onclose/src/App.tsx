import { Alert, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen ? (
        <Alert
          status="warning"
          title="Closeable Alert"
          onClose={() => setIsOpen(false)}
        />
      ) : (
        <Button
          size="large"
          onClick={() => setIsOpen(true)}
          style={{ width: "100%" }}
        >
          Open Alert
        </Button>
      )}
    </>
  );
}

export default App;
