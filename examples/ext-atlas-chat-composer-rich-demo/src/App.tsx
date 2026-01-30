import { ChatComposerRich } from "@servicetitan/anvil2-ext-atlas";
import { Card } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  return (
    <Card
      flexDirection="column"
      gap={4}
      background="strong"
      style={{ width: "388px" }}
    >
      <ChatComposerRich
        message={message}
        onChange={setMessage}
        onSend={(text) => {
          console.log("sent:", text);
          setMessage("");
        }}
        onDictateMessage={() => console.log("dictate clicked")}
        onUploadFile={() => console.log("upload clicked")}
        placeholder="Ask anything..."
      />
    </Card>
  );
}

export default App;
