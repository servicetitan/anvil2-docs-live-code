import { Button, Tooltip } from "@servicetitan/anvil2";
import Edit from "@servicetitan/anvil2/assets/icons/material/round/edit.svg";

function App() {
  return (
    <Tooltip open>
      <Tooltip.Trigger>
        <Button icon={Edit} appearance="ghost" />
      </Tooltip.Trigger>
      <Tooltip.Content>Edit</Tooltip.Content>
    </Tooltip>
  );
}

export default App;
