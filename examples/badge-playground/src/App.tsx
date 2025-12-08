import { Badge, Flex, Button } from "@servicetitan/anvil2";
import Warning from "@servicetitan/anvil2/assets/icons/material/round/warning.svg";

function App() {
  return (
    <Flex gap="6">
      <div style={{ display: "inline-block", position: "relative" }}>
        <Button icon={Warning} />
        <Badge aria-label="with 4 notifications">4</Badge>
      </div>
      <Button>
        What&apos;s new?
        <Badge aria-label="with notifications" />
      </Button>
    </Flex>
  );
}

export default App;
