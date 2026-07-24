import { useState } from "react";
import { PromptBar } from "@servicetitan/carto-react-kit";

function App() {
  const [value, setValue] = useState(
    "What's the weather like in San Francisco today?",
  );

  return <PromptBar value={value} onChange={setValue} onSend={() => {}} />;
}

export default App;
