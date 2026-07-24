import { useState } from "react";
import { AgentPrompt } from "@servicetitan/carto-react-kit";

function App() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div style={{ width: 380 }}>
      <AgentPrompt
        question="Question created by the agent, asking the user how to proceed."
        options={[
          { value: "a", label: "Choice A" },
          { value: "b", label: "Choice B" },
          { value: "c", label: "Choice C" },
        ]}
        value={value}
        onChange={setValue}
        allowOther={false}
        onClose={() => {}}
      />
    </div>
  );
}

export default App;
