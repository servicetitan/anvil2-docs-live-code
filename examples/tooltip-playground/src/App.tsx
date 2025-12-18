import { Tooltip, Button } from "@servicetitan/anvil2";
import Info from "@servicetitan/anvil2/assets/icons/material/round/edit.svg";

function App() {
  return (
    <div style={{ paddingBlockStart: "3rem" }}>
      <Tooltip defaultOpen>
        <Tooltip.Trigger>
          <Button icon={Info}>Hover over me</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>This is a tooltip!</Tooltip.Content>
      </Tooltip>
    </div>
  );
}

export default App;
