import { Radio } from "@servicetitan/anvil2";

function App() {
  return (
    <Radio.Group legend="Update auto-renew setting">
      <Radio
        name="c3"
        id="ex-c3-1"
        value="a"
        label="Enabled"
        description="Agreement will be automatically renewed on its end date"
      />
      <Radio
        name="c3"
        id="ex-ce-2"
        value="b"
        label="Disabled"
        description="Agreement will expire on its end date unless renewed manually"
      />
    </Radio.Group>
  );
}

export default App;
