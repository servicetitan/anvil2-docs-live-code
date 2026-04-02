import { Checkbox, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="6">
      <Checkbox.Group legend="**Bold** legend">
        <Checkbox label="Option A" />
        <Checkbox label="Option B" />
      </Checkbox.Group>
      <Checkbox.Group legend="*Italic* legend">
        <Checkbox label="Option A" />
        <Checkbox label="Option B" />
      </Checkbox.Group>
      <Checkbox.Group legend="***Bold and italic*** legend">
        <Checkbox label="Option A" />
        <Checkbox label="Option B" />
      </Checkbox.Group>
      <Checkbox.Group legend="==Highlight== legend">
        <Checkbox label="Option A" />
        <Checkbox label="Option B" />
      </Checkbox.Group>
      <Checkbox.Group legend="`Code` legend">
        <Checkbox label="Option A" />
        <Checkbox label="Option B" />
      </Checkbox.Group>
    </Flex>
  );
}

export default App;
