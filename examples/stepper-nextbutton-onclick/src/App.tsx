import { Stepper, Checkbox, Flex } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [firstPanelValid, setFirstPanelValid] = useState(false);
  const [error, setError] = useState<string>();
  const handleNextClick = () => {
    if (firstPanelValid === false) {
      setError("Select this checkbox to continue");
    } else {
      setError(undefined);
    }
    return firstPanelValid;
  };

  return (
    <div style={{ minWidth: "20.5rem" }}>
      <Stepper>
        <Stepper.List>
          <Stepper.Step id="t1" controls="p1">
            Step 1
          </Stepper.Step>
          <Stepper.Step id="t2" controls="p2">
            Step 2
          </Stepper.Step>
        </Stepper.List>
        <Stepper.Panel id="p1">
          <Checkbox
            onChange={(e) => {
              if (e && e.target.checked) setError(undefined);
              setFirstPanelValid(e?.target.checked ?? false);
            }}
            label="Check this box to continue"
            checked={firstPanelValid}
            error={!!error}
            description={error}
          />
        </Stepper.Panel>
        <Stepper.Panel id="p2">Step 2 Content</Stepper.Panel>
        <Stepper.FinalPanel>The process is complete.</Stepper.FinalPanel>
        <Flex gap="3" justifyContent="flex-end">
          <Stepper.PrevButton />
          <Stepper.NextButton onClick={handleNextClick} />
        </Flex>
      </Stepper>
    </div>
  );
}

export default App;
