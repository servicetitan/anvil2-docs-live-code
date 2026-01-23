import { Radio } from "@servicetitan/anvil2";

function App() {
  return (
    <Radio.Group legend="Default checked example">
      <Radio name="ex4" value="a" label="Option A" defaultChecked />
      <Radio name="ex4" value="b" label="Option B" />
      <Radio name="ex4" value="c" label="Option C" />
      <Radio name="ex4" value="d" label="Option D" />
    </Radio.Group>
  );
}

export default App;
