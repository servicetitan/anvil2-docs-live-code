import { Radio, TextField } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [radioState, setRadioState] = useState("other");

  return (
    <Radio.Group legend="I am a...">
      <Radio
        name="exampleRadioOther"
        value="software"
        label="Designer"
        checked={radioState === "software"}
        onChange={(_v) => setRadioState("software")}
      />
      <Radio
        name="exampleRadioOther"
        value="hardware"
        label="Developer"
        checked={radioState === "hardware"}
        onChange={(_v) => setRadioState("hardware")}
      />
      <Radio
        name="exampleRadioOther"
        value="report"
        label="Product Manager"
        checked={radioState === "report"}
        onChange={(_v) => setRadioState("report")}
      />
      <Radio
        name="exampleRadioOther"
        value="tools"
        label="Other"
        checked={radioState === "other"}
        onChange={(_v) => setRadioState("other")}
      />
      {radioState === "other" && (
        <div
          style={{ marginLeft: "2rem", marginTop: "-0.25rem", width: "15rem" }}
        >
          {" "}
          <TextField />{" "}
        </div>
      )}
    </Radio.Group>
  );
}

export default App;
