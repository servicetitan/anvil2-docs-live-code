import { SegmentedControl, Flex, Tooltip } from "@servicetitan/anvil2";
import List from "@servicetitan/anvil2/assets/icons/material/round/list.svg";
import GridView from "@servicetitan/anvil2/assets/icons/material/round/grid_view.svg";

function App() {
  return (
    <Flex gap="6" direction="column">
      <SegmentedControl defaultSelected="list">
        <SegmentedControl.Segment value="list" icon={List}>
          List
        </SegmentedControl.Segment>
        <SegmentedControl.Segment value="grid" icon={GridView}>
          Grid
        </SegmentedControl.Segment>
      </SegmentedControl>
      <SegmentedControl defaultSelected="list">
        <Tooltip>
          <Tooltip.Trigger>
            <SegmentedControl.Segment
              value="list"
              icon={List}
              aria-label="List view"
            />
          </Tooltip.Trigger>
          <Tooltip.Content>List</Tooltip.Content>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger>
            <SegmentedControl.Segment
              value="grid"
              icon={GridView}
              aria-label="Grid view"
            />
          </Tooltip.Trigger>
          <Tooltip.Content>Grid</Tooltip.Content>
        </Tooltip>
      </SegmentedControl>
    </Flex>
  );
}

export default App;
