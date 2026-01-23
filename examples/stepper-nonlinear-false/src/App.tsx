import { Stepper } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "55rem" }}>
      <Stepper defaultIndex={1}>
        <Stepper.List>
          <Stepper.Step id="t1" controls="p1">
            Default
          </Stepper.Step>
          <Stepper.Step id="t1" controls="p1">
            Selected
          </Stepper.Step>
          <Stepper.Step id="t3" controls="p3">
            In Progress
          </Stepper.Step>
          <Stepper.Step id="t3" controls="p3">
            Complete
          </Stepper.Step>
          <Stepper.Step id="t3" controls="p3" data-interactive="focus-visible">
            Focus Visible (false)
          </Stepper.Step>
        </Stepper.List>
      </Stepper>
    </div>
  );
}

export default App;
