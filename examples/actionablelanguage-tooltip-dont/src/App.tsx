import { Tooltip, Flex, Button } from "@servicetitan/anvil2";
import Info from "@servicetitan/anvil2/assets/icons/material/round/info.svg";

function App() {
  return (
    <Flex
      direction="column"
      gap="4"
      style={{ paddingBlockStart: "7.5rem", paddingInline: "3.5rem" }}
    >
      <Tooltip defaultOpen>
        <Tooltip.Trigger>
          <Button icon={Info}>Hover over me</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          This will lock your settings until they’re manually changed. If you
          need to unlock your settings, be sure to visit the Profile Settings
          page and click the lock to make changes.
        </Tooltip.Content>
      </Tooltip>
    </Flex>
  );
}

export default App;
