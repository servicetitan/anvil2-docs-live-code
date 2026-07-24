import { useState } from "react";
import { AgentPrompt } from "@servicetitan/carto-react-kit";

const options = [
  { value: "choc", label: "Chocolate" },
  { value: "van", label: "Vanilla" },
  { value: "straw", label: "Strawberry" },
  { value: "cookie", label: "Cookie Dough" },
];

function App() {
  const [value, setValue] = useState<string | null>(null);
  const [other, setOther] = useState("");

  return (
    <div style={{ width: 380 }}>
      <AgentPrompt
        question="Which flavor would you like?"
        options={options}
        value={value}
        onChange={setValue}
        otherValue={other}
        onOtherChange={setOther}
        onClose={() => {}}
      />
    </div>
  );
}

export default App;
