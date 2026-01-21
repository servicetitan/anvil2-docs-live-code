import { Button, Flex, Tooltip } from "@servicetitan/anvil2";
import Info from "@servicetitan/anvil2/assets/icons/material/round/info.svg";

function App() {
  return (
    <Flex gap="3" justifyContent="flex-end">
      <Button>Previous</Button>
      <Button appearance="primary" disabled>
        Next
      </Button>
      <Tooltip placement="top-end">
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
