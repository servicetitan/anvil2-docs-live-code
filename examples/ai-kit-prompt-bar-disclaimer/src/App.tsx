import { useState } from "react";
import { PromptBar } from "@servicetitan/anvil2-ai-kit";

function App() {
  const [value, setValue] = useState("");

  return (
    <PromptBar
      value={value}
      onChange={setValue}
      disclaimer={{ linkHref: "https://example.com" }}
    />
  );
}

export default App;
