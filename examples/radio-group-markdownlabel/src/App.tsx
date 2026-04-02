import { Flex, Radio } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="6">
      <Radio.Group legend="**Bold** legend">
        <Radio name="bold" value="a" label="Option A" />
        <Radio name="bold" value="b" label="Option B" />
      </Radio.Group>
      <Radio.Group legend="*Italic* legend">
        <Radio name="italic" value="a" label="Option A" />
        <Radio name="italic" value="b" label="Option B" />
      </Radio.Group>
      <Radio.Group legend="***Bold and italic*** legend">
        <Radio name="bolditalic" value="a" label="Option A" />
        <Radio name="bolditalic" value="b" label="Option B" />
      </Radio.Group>
      <Radio.Group legend="==Highlight== legend">
        <Radio name="highlight" value="a" label="Option A" />
        <Radio name="highlight" value="b" label="Option B" />
      </Radio.Group>
      <Radio.Group legend="`Code` legend">
        <Radio name="code" value="a" label="Option A" />
        <Radio name="code" value="b" label="Option B" />
      </Radio.Group>
    </Flex>
  );
}

export default App;
