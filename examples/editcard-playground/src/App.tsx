import {
  EditCard,
  type EditCardState,
  type EditCardChange,
} from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [state, setState] = useState<EditCardState>("not started");
  const onStateChange = (change: EditCardChange) => {
    if (change === "edit") {
      setState("in progress");
    }
    if (change === "save") {
      setState("complete");
    }
    if (change === "cancel") {
      setState("error");
    }
  };

  return (
    <EditCard headerText="Header" state={state} onStateChange={onStateChange}>
      Edit card content
    </EditCard>
  );
}

export default App;
