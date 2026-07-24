import { useState } from "react";
import { PromptBar } from "@servicetitan/carto-react-kit";

function App() {
  const [value, setValue] = useState(
    "Can you help me draft a detailed message to the customer explaining the delay in their service appointment, the reason for the delay, and what we're doing to make it right? Please keep the tone apologetic but professional.",
  );

  return <PromptBar value={value} onChange={setValue} onSend={() => {}} />;
}

export default App;
