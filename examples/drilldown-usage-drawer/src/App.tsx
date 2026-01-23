import { useState, useRef } from "react";
import {
  Drawer,
  Button,
  DrillDown,
  ListView,
  Text,
  Flex,
  TextField,
  Textarea,
  useDrillDown,
} from "@servicetitan/anvil2";

function App() {
  const [state, setState] = useState({ open: true });
  const [optionValues, setOptionValues] = useState({
    "Option 1": "Option 1",
    "Option 2": "Option 2",
    "Option 3": "Option 3",
  });
  const [textareaValues, setTextareaValues] = useState({
    "Option 1":
      "This is extra editing information for demonstration purposes for the drilldown",
    "Option 2":
      "This is extra editing information for demonstration purposes for the drilldown",
    "Option 3":
      "This is extra editing information for demonstration purposes for the drilldown",
  });
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState<string>("");
  const [editingTextareaValue, setEditingTextareaValue] = useState<string>("");

  const isSavingRef = useRef(false);
  const { drillDownProps, setIndex } = useDrillDown();
  const [currentIndex, setCurrentIndex] = useState<number | undefined>(
    undefined,
  );

  // Track index from context
  const handleContextChange = (context: { index?: number }) => {
    setCurrentIndex(context.index);
  };

  // Override setIndex to reset editing value when closing (unless saving)
  const handleSetIndex = (index: number | undefined) => {
    if (index === undefined && !isSavingRef.current) {
      setEditingValue("");
      setEditingTextareaValue("");
      setSelectedOption(null);
    }
    setIndex(index);
    setCurrentIndex(index);
  };

  return (
    <>
      <Button onClick={() => setState({ open: true })}>Open Drawer</Button>
      <Drawer
        {...drillDownProps}
        onDrillDownContextChange={handleContextChange}
        open={state.open}
        onClose={() => {
          isSavingRef.current = false;
          setEditingValue("");
          setEditingTextareaValue("");
          setSelectedOption(null);
          setState({ open: false });
        }}
      >
        {currentIndex == null && (
          <Drawer.Header>DrillDown in a Drawer</Drawer.Header>
        )}
        <Drawer.Content>
          <ListView>
            <ListView.Option label="Option 1">
              <Text flexGrow={1}>{optionValues["Option 1"]}</Text>
              <ListView.OptionCell>
                <DrillDown.NextButton
                  onClick={() => {
                    setSelectedOption("Option 1");
                    setEditingValue(optionValues["Option 1"]);
                    setEditingTextareaValue(textareaValues["Option 1"]);
                  }}
                >
                  Edit
                </DrillDown.NextButton>
              </ListView.OptionCell>
            </ListView.Option>
            <ListView.Option label="Option 2">
              <Text flexGrow={1}>{optionValues["Option 2"]}</Text>
              <ListView.OptionCell>
                <DrillDown.NextButton
                  onClick={() => {
                    setSelectedOption("Option 2");
                    setEditingValue(optionValues["Option 2"]);
                    setEditingTextareaValue(textareaValues["Option 2"]);
                  }}
                >
                  Edit
                </DrillDown.NextButton>
              </ListView.OptionCell>
            </ListView.Option>
            <ListView.Option label="Option 3">
              <Text flexGrow={1}>{optionValues["Option 3"]}</Text>
              <ListView.OptionCell>
                <DrillDown.NextButton
                  onClick={() => {
                    setSelectedOption("Option 3");
                    setEditingValue(optionValues["Option 3"]);
                    setEditingTextareaValue(textareaValues["Option 3"]);
                  }}
                >
                  Edit
                </DrillDown.NextButton>
              </ListView.OptionCell>
            </ListView.Option>
          </ListView>
        </Drawer.Content>
        <Drawer.Footer>
          <Flex justifyContent="end" gap="3">
            <Drawer.CancelButton>Cancel</Drawer.CancelButton>
            <Button appearance="primary">Save</Button>
          </Flex>
        </Drawer.Footer>
        <DrillDown
          {...drillDownProps}
          index={0}
          className="flex"
          style={{ display: "flex" }}
        >
          <DrillDown.Header>
            {selectedOption && selectedOption in optionValues
              ? `Edit ${optionValues[selectedOption as keyof typeof optionValues]}`
              : selectedOption
                ? `Edit ${selectedOption}`
                : "Edit"}
          </DrillDown.Header>
          <DrillDown.Content>
            <Flex direction="column" gap="6" style={{ width: "100%" }}>
              <TextField
                label="Name"
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
                style={{ width: "100%" }}
              />
              <Textarea
                label="Description"
                value={editingTextareaValue}
                onChange={(e) => setEditingTextareaValue(e?.target.value || "")}
                style={{ width: "100%" }}
              />
            </Flex>
          </DrillDown.Content>
          <DrillDown.Footer>
            <Flex gap="3" justifyContent="flex-end">
              <DrillDown.PrevButton
                onClick={() => {
                  isSavingRef.current = false;
                  handleSetIndex(undefined);
                }}
              >
                Cancel
              </DrillDown.PrevButton>
              <DrillDown.PrevButton
                appearance="primary"
                onClick={() => {
                  if (selectedOption) {
                    setOptionValues((prev) => ({
                      ...prev,
                      [selectedOption]: editingValue,
                    }));
                    setTextareaValues((prev) => ({
                      ...prev,
                      [selectedOption]: editingTextareaValue,
                    }));
                  }
                  isSavingRef.current = true;
                  handleSetIndex(undefined);
                }}
              >
                Save
              </DrillDown.PrevButton>
            </Flex>
          </DrillDown.Footer>
        </DrillDown>
      </Drawer>
    </>
  );
}

export default App;
