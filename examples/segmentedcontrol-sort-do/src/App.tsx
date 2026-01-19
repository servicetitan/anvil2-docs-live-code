import { SegmentedControl, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [, setFilter] = useState("all");

  return (
    <Flex gap="3" direction="column">
      <SegmentedControl
        fill
        aria-label="News feed"
        defaultSelected="latest"
        onChange={(value) => setFilter(value)}
      >
        <SegmentedControl.Segment value="latest">
          Latest
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="trending">
          Trending
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="saved">Saved</SegmentedControl.Segment>
      </SegmentedControl>
    </Flex>
  );
}

export default App;
