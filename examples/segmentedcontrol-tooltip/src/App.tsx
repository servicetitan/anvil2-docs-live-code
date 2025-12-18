import { SegmentedControl, Flex, Tooltip } from "@servicetitan/anvil2";
import AddCircle from "@servicetitan/anvil2/assets/icons/material/round/add_circle.svg";
import BorderClear from "@servicetitan/anvil2/assets/icons/material/round/border_clear.svg";
import ContentCopy from "@servicetitan/anvil2/assets/icons/material/round/content_copy.svg";
import FileUpload from "@servicetitan/anvil2/assets/icons/material/round/file_upload.svg";
import GridView from "@servicetitan/anvil2/assets/icons/material/round/grid_view.svg";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("upload");

  return (
    <Flex direction="column" style={{ paddingBlockStart: "2rem" }}>
      <SegmentedControl selected={selected} onChange={setSelected}>
        <Tooltip>
          <Tooltip.Trigger>
            <SegmentedControl.Segment
              value="add"
              icon={AddCircle}
              aria-label="Add"
            />
          </Tooltip.Trigger>
          <Tooltip.Content>Add</Tooltip.Content>
        </Tooltip>

        <Tooltip>
          <Tooltip.Trigger>
            <SegmentedControl.Segment
              value="border"
              icon={BorderClear}
              aria-label="Border"
            />
          </Tooltip.Trigger>
          <Tooltip.Content>Border</Tooltip.Content>
        </Tooltip>

        <Tooltip>
          <Tooltip.Trigger>
            <SegmentedControl.Segment
              value="copy"
              icon={ContentCopy}
              aria-label="Copy"
            />
          </Tooltip.Trigger>
          <Tooltip.Content>Copy</Tooltip.Content>
        </Tooltip>

        <Tooltip defaultOpen>
          <Tooltip.Trigger>
            <SegmentedControl.Segment
              value="upload"
              icon={FileUpload}
              aria-label="Upload"
            />
          </Tooltip.Trigger>
          <Tooltip.Content>Upload</Tooltip.Content>
        </Tooltip>

        <Tooltip>
          <Tooltip.Trigger>
            <SegmentedControl.Segment
              value="grid"
              icon={GridView}
              aria-label="Grid"
            />
          </Tooltip.Trigger>
          <Tooltip.Content>Grid</Tooltip.Content>
        </Tooltip>
      </SegmentedControl>
    </Flex>
  );
}

export default App;
