import { useState } from "react";
import { SelectCard, Flex, Text } from "@servicetitan/anvil2";

function App() {
  const [selected, setSelected] = useState<Array<string | number>>(["A"]);

  return (
    <SelectCard.Group
      legend="Which method of travel do you prefer?"
      selectionMode="single"
      value={selected}
      onChange={(_e, state) => {
        if (!state?.id) return;
        setSelected(state.checked ? [state.id] : []);
      }}
    >
      <Flex alignItems="center" gap="2">
        <SelectCard id="A">
          <Text>Walking</Text>
        </SelectCard>
        <SelectCard id="B">
          <Text>Biking</Text>
        </SelectCard>
        <SelectCard id="C">
          <Text>Driving</Text>
        </SelectCard>
      </Flex>
    </SelectCard.Group>
  );
}

export default App;
