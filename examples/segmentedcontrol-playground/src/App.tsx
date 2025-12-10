import { SegmentedControl, Flex, Divider, Text } from "@servicetitan/anvil2";
import MenuIcon from "@servicetitan/anvil2/assets/icons/material/round/menu.svg";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("level 2");

  return (
    <Flex direction="column" gap="6">
      <SegmentedControl selected={selected} onChange={setSelected}>
        <SegmentedControl.Segment value="level 1" icon={MenuIcon}>
          Level 1
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="level 2" icon={MenuIcon}>
          Level 2
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="level 3" icon={MenuIcon}>
          Level 3
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="level 4" icon={MenuIcon}>
          Level 4
        </SegmentedControl.Segment>
      </SegmentedControl>

      <Divider />

      <Text>The selected value is: {JSON.stringify(selected, null, 2)}</Text>
    </Flex>
  );
}

export default App;
