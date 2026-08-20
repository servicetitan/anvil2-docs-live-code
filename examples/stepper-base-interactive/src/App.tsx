import { useState } from "react";
import { StepperBase } from "@servicetitan/anvil2";

function App() {
  const [index, setIndex] = useState(0);

  return (
    <div style={{ minWidth: "55rem" }}>
      <StepperBase interactive index={index} onIndexChange={setIndex}>
        <StepperBase.List>
          <StepperBase.Step id="one" state={index > 0 ? "complete" : "started"}>
            Account
          </StepperBase.Step>
          <StepperBase.Step
            id="two"
            state={index === 1 ? "started" : "not started"}
          >
            Profile
          </StepperBase.Step>
          <StepperBase.Step id="three" disabled>
            Review
          </StepperBase.Step>
        </StepperBase.List>
        <StepperBase.Panel step="one">Account details</StepperBase.Panel>
        <StepperBase.Panel step="two">Profile details</StepperBase.Panel>
        <StepperBase.Panel step="three">Review details</StepperBase.Panel>
      </StepperBase>
    </div>
  );
}

export default App;
