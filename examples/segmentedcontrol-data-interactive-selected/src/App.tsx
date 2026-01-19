import { SegmentedControl, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="6" direction="column">
      <SegmentedControl defaultSelected="level 1">
        <SegmentedControl.Segment value="level 1">
          Selected Default{" "}
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="level 2">
          Other Segment
        </SegmentedControl.Segment>
      </SegmentedControl>
      <SegmentedControl defaultSelected="level 1">
        <SegmentedControl.Segment
          value="level 1"
          data-interactive="focus-visible"
        >
          Selected Focus Visible
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="level 2">
          Other Segment
        </SegmentedControl.Segment>
      </SegmentedControl>
    </Flex>
  );
}

export default App;
