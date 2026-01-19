import { Button, Tooltip } from "@servicetitan/anvil2";
import Edit from "@servicetitan/anvil2/assets/icons/material/round/edit.svg";

function App() {
  return (
    <div style={{ paddingBlockStart: "2.5rem" }}>
      <Tooltip open>
        <Tooltip.Trigger>
          <Button icon={Edit} appearance="ghost" />
        </Tooltip.Trigger>
        <Tooltip.Content>Edit</Tooltip.Content>
      </Tooltip>
    </div>
  );
}

export default App;
