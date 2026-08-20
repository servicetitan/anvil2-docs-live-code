import { Flex, StepperBase } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="6" style={{ minWidth: "55rem" }}>
      <StepperBase index={0}>
        <StepperBase.List>
          <StepperBase.Step>Not started</StepperBase.Step>
          <StepperBase.Step>Not started</StepperBase.Step>
          <StepperBase.Step>Not started</StepperBase.Step>
        </StepperBase.List>
      </StepperBase>
      <StepperBase index={1}>
        <StepperBase.List>
          <StepperBase.Step state="complete">Complete</StepperBase.Step>
          <StepperBase.Step state="started">Started</StepperBase.Step>
          <StepperBase.Step>Not started</StepperBase.Step>
        </StepperBase.List>
      </StepperBase>
      <StepperBase index={1}>
        <StepperBase.List>
          <StepperBase.Step state="complete">Complete</StepperBase.Step>
          <StepperBase.Step state="complete">Complete</StepperBase.Step>
          <StepperBase.Step>Not started</StepperBase.Step>
        </StepperBase.List>
      </StepperBase>
    </Flex>
  );
}

export default App;
