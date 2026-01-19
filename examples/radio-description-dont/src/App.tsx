import { Radio, RadioGroup } from "@servicetitan/anvil2";

function App() {
  return (
    <RadioGroup legend="Update auto-renew setting">
      <Radio
        name="c3"
        id="ex-c3-1"
        value="a"
        label="Enabled"
        description="Agreement will automatically renew"
      />
      <Radio
        name="c3"
        id="ex-ce-2"
        value="b"
        label="Disabled"
        description="Agreement will not automatically renew"
      />
    </RadioGroup>
  );
}

export default App;
