import {
  EditCard,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  Flex,
  Text,
  type EditCardState,
  type EditCardChange,
  type RadioState,
} from "@servicetitan/anvil2";
import { useState, type ChangeEvent } from "react";

function App() {
  const [state, setState] = useState<EditCardState>("complete");
  const onStateChange = (change: EditCardChange) => {
    if (change === "edit") {
      console.log("in progress");
      setState("in progress");
    }
    if (change === "save") {
      console.log("saved");
      setState("complete");
    }

    if (change === "cancel") {
      setState("complete");
    }
  };

  const [inputValue, setInputValue] = useState("Jane Doe");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const [list, setList] = useState([
    {
      label: "Email",
      checked: false,
    },
    {
      label: "Text",
      checked: true,
    },
  ]);

  const selectedPref = list.find((item) => item.checked);
  console.info("selectedPref:", selectedPref);

  const handleUpdate = (_state: RadioState | undefined, index: number) => {
    setList((prev) =>
      prev.map((item, i) => ({
        label: item.label,
        checked: index === i,
      })),
    );
  };

  const active = (
    <Grid gap="6">
      <TextField label="Name" value={inputValue} onChange={handleInputChange} />

      <RadioGroup legend="Preferred communication method">
        {list.map((item, i) => {
          return (
            <Radio
              key={i}
              checked={item.checked}
              label={item.label}
              onChange={(
                _e?: ChangeEvent<HTMLInputElement>,
                state?: RadioState,
              ) => handleUpdate(state, i)}
            />
          );
        })}
      </RadioGroup>
    </Grid>
  );

  const summary = (
    <Flex gap={8} grow={1} wrap="wrap">
      <Flex direction="column" gap={1} basis="200px">
        <Text variant="eyebrow" size="medium">
          Name
        </Text>
        <Text size="medium">{inputValue}</Text>
      </Flex>
      <Flex direction="column" gap={1} basis="200px">
        <Text variant="eyebrow" size="medium">
          Communication Method
        </Text>
        <Text size="medium">{selectedPref?.label}</Text>
      </Flex>
    </Flex>
  );

  return (
    <EditCard
      state={state}
      headerText="User Information"
      onStateChange={onStateChange}
    >
      <Flex grow={1} style={{ width: "500px", maxWidth: "100%" }}>
        {(state === "not started" || state === "complete") && summary}
        {state === "in progress" && active}
      </Flex>
    </EditCard>
  );
}

export default App;
