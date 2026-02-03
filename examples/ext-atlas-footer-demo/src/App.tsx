import { Footer } from "@servicetitan/anvil2-ext-atlas";
import { Card } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  return (
    <Card
      flexDirection="column"
      gap={4}
      background="strong"
      padding="0"
      style={{ width: "388px" }}
    >
      <Footer
        message={message}
        onMessageChange={setMessage}
        onSubmit={() => console.log("submitted:", message)}
        placeholder="Ask Atlas"
      />
    </Card>
  );
}

export default App;
