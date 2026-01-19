import { SegmentedControl, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [, setFilter] = useState("all");

  return (
    <Flex gap="3" direction="column">
      <SegmentedControl
        fill
        aria-label="Time Range"
        defaultSelected="day"
        onChange={(value) => setFilter(value)}
      >
        <SegmentedControl.Segment value="day">Day</SegmentedControl.Segment>
        <SegmentedControl.Segment value="week">Week</SegmentedControl.Segment>
        <SegmentedControl.Segment value="month">Month</SegmentedControl.Segment>
        <SegmentedControl.Segment value="year">Year</SegmentedControl.Segment>
      </SegmentedControl>
    </Flex>
  );
}

export default App;
