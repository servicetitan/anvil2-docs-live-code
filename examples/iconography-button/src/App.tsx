import { Button, Flex, Tooltip } from "@servicetitan/anvil2";
import Add from "@servicetitan/anvil2/assets/icons/material/round/add.svg";
import Edit from "@servicetitan/anvil2/assets/icons/material/round/edit.svg";
import Pause from "@servicetitan/anvil2/assets/icons/material/round/pause.svg";

function App() {
  return (
    <Flex
      gap="2"
      style={{ paddingBlockStart: "2.5rem", paddingInline: "0.5rem" }}
    >
      <Tooltip>
        <Tooltip.Trigger>
          <Button icon={Add} aria-label="add" />
        </Tooltip.Trigger>
        <Tooltip.Content>Add</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Button icon={Edit} aria-label="edit" />
        </Tooltip.Trigger>
        <Tooltip.Content>Edit</Tooltip.Content>
      </Tooltip>
      <Tooltip defaultOpen>
        <Tooltip.Trigger>
          <Button icon={Pause} aria-label="pause" />
        </Tooltip.Trigger>
        <Tooltip.Content>Pause</Tooltip.Content>
      </Tooltip>
    </Flex>
  );
}

export default App;
