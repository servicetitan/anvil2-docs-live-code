import { StepperBase } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "55rem" }}>
      <StepperBase index={2}>
        <StepperBase.List>
          <StepperBase.Step state="complete">Approved</StepperBase.Step>
          <StepperBase.Step state="complete">Reconciled</StepperBase.Step>
          <StepperBase.Step state="complete">
            Approved & Reconciled
          </StepperBase.Step>
          <StepperBase.Step>Scheduled</StepperBase.Step>
        </StepperBase.List>
      </StepperBase>
    </div>
  );
}

export default App;
