import { Button, Tooltip } from "@servicetitan/anvil2";
import AddCircle from "@servicetitan/anvil2/assets/icons/material/round/add_circle.svg";

function App() {
  return (
    <div style={{ paddingBlockStart: "2.5rem", paddingInline: "2rem" }}>
      <Tooltip open>
        <Tooltip.Trigger>
          <Button icon={AddCircle} appearance="ghost" />
        </Tooltip.Trigger>
        <Tooltip.Content>Add Widget</Tooltip.Content>
      </Tooltip>
    </div>
  );
}

export default App;
