import { SegmentedControl } from "@servicetitan/anvil2";

function App() {
  return (
    <SegmentedControl defaultSelected="level 1" fill>
      <SegmentedControl.Segment value="level 1">
        Level 1
      </SegmentedControl.Segment>
      <SegmentedControl.Segment value="level 2">
        Level 2
      </SegmentedControl.Segment>
      <SegmentedControl.Segment value="level 3">
        Level 3
      </SegmentedControl.Segment>
      <SegmentedControl.Segment value="level 4">
        Level 4
      </SegmentedControl.Segment>
    </SegmentedControl>
  );
}

export default App;
