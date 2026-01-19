import { Radio, RadioGroup, TextField } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [radioState, setRadioState] = useState("other");

  return (
    <RadioGroup legend="How did you hear about us?">
      <Radio
        name="exampleRadioOther"
        value="search"
        label="Designer"
        checked={radioState === "search"}
        onChange={() => setRadioState("search")}
      />
      <Radio
        name="exampleRadioOther"
        value="social"
        label="Developer"
        checked={radioState === "social"}
        onChange={(_v) => setRadioState("social")}
      />
      <Radio
        name="exampleRadioOther"
        value="recommendation"
        label="Product Manager"
        checked={radioState === "recommendation"}
        onChange={(_v) => setRadioState("recommendation")}
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
          style={{ marginLeft: "2rem", marginTop: "-0.75rem", width: "15rem" }}
        >
          {" "}
          <TextField />{" "}
        </div>
      )}
    </RadioGroup>
  );
}

export default App;
