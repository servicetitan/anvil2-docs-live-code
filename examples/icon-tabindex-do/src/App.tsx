import { Icon, Tooltip } from "@servicetitan/anvil2";
import Warning from "@servicetitan/anvil2/assets/icons/material/round/warning.svg";

function App() {
  return (
    <Tooltip>
      <Tooltip.Trigger>
        <Icon svg={Warning} tabIndex={0} />
      </Tooltip.Trigger>
      <Tooltip.Content>Hello, I&apos;m a tooltip</Tooltip.Content>
    </Tooltip>
  );
}

export default App;
