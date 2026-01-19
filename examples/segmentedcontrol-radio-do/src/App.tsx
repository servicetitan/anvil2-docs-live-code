import { SegmentedControl, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [, setFilter] = useState("all");

  return (
    <Flex gap="3" direction="column">
      <SegmentedControl
        fill
        aria-label="Shirt sizes"
        defaultSelected="small"
        onChange={(value) => setFilter(value)}
      >
        <SegmentedControl.Segment value="small">Small</SegmentedControl.Segment>
        <SegmentedControl.Segment value="medium">
          Medium
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="large">Large</SegmentedControl.Segment>
      </SegmentedControl>
    </Flex>
  );
}

export default App;
