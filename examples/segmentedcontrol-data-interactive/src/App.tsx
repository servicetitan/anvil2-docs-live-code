import { SegmentedControl, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="6" direction="column">
      <SegmentedControl defaultSelected="level 1">
        <SegmentedControl.Segment value="level 1">
          Selected
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="level 2">
          Default
        </SegmentedControl.Segment>
      </SegmentedControl>
      <SegmentedControl defaultSelected="level 1">
        <SegmentedControl.Segment value="level 1">
          Selected
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="level 2" data-interactive="hover">
          Default Hover
        </SegmentedControl.Segment>
      </SegmentedControl>
      <SegmentedControl defaultSelected="level 1">
        <SegmentedControl.Segment value="level 1">
          Selected
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="level 2" data-interactive="active">
          Default Active
        </SegmentedControl.Segment>
      </SegmentedControl>
    </Flex>
  );
}

export default App;
