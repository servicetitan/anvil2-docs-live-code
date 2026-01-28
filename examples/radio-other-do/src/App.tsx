import { Radio, TextField, Flex } from "@servicetitan/anvil2";
import { useState, useId } from "react";

function App() {
  const [selectedValue, setSelectedValue] = useState("other");
  const [otherValue, setOtherValue] = useState("");
  const otherInputId = useId();

  return (
    <Radio.Group legend="How did you hear about us?">
      <Radio
        name="exampleRadioOther"
        value="search"
        label="Search engine"
        checked={selectedValue === "search"}
        onChange={() => setSelectedValue("search")}
      />
      <Radio
        name="exampleRadioOther"
        value="social"
        label="Social media"
        checked={selectedValue === "social"}
        onChange={() => setSelectedValue("social")}
      />
      <Radio
        name="exampleRadioOther"
        value="recommendation"
        label="Friend or colleague"
        checked={selectedValue === "recommendation"}
        onChange={() => setSelectedValue("recommendation")}
      />
      <Flex gap="2" alignItems="start" direction="column">
        <Radio
          name="exampleRadioOther"
          value="other"
          label="Other"
          checked={selectedValue === "other"}
          onChange={() => setSelectedValue("other")}
          aria-describedby={
            selectedValue === "other" ? otherInputId : undefined
          }
        />
        {selectedValue === "other" && (
          <TextField
            id={otherInputId}
            aria-label="Please specify"
            value={otherValue}
            onChange={(e) => setOtherValue(e.target.value)}
            disabled={selectedValue !== "other"}
            style={{
              marginInlineStart: "2rem",
            }}
          />
        )}
      </Flex>
    </Radio.Group>
  );
}

export default App;
