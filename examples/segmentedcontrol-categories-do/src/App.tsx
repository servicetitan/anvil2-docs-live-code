import { SegmentedControl, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [, setFilter] = useState("all");

  return (
    <Flex gap="3" direction="column">
      <SegmentedControl
        fill
        aria-label="Review items"
        defaultSelected="all"
        onChange={(value) => setFilter(value)}
      >
        <SegmentedControl.Segment value="all">All</SegmentedControl.Segment>
        <SegmentedControl.Segment value="on hold">
          On Hold
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="needs review">
          Needs Review
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="reviewed">
          Reviewed
        </SegmentedControl.Segment>
      </SegmentedControl>
    </Flex>
  );
}

export default App;
