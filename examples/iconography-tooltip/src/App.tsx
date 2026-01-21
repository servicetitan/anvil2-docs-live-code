import { Button, Flex, Tooltip } from "@servicetitan/anvil2";
import Edit from "@servicetitan/anvil2/assets/icons/material/round/edit.svg";
import Info from "@servicetitan/anvil2/assets/icons/material/round/info.svg";

function App() {
  return (
    <Flex
      gap="2"
      style={{ paddingBlockStart: "3.5rem", paddingInline: "7.5rem" }}
    >
      <Tooltip>
        <Tooltip.Trigger>
          <Button icon={Edit} appearance="ghost" />
        </Tooltip.Trigger>
        <Tooltip.Content>Edit</Tooltip.Content>
      </Tooltip>
      <Tooltip defaultOpen>
        <Tooltip.Trigger>
          <Button appearance="ghost" icon={Info} />
        </Tooltip.Trigger>
        <Tooltip.Content>
          Fill out all the fields in the form to proceed
        </Tooltip.Content>
      </Tooltip>
    </Flex>
  );
}

export default App;
