import { Stepper } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ maxWidth: 360, width: "100%" }}>
      <Stepper defaultIndex={1}>
        <Stepper.List>
          <Stepper.Step id="t1" controls="p1">
            Step Label
          </Stepper.Step>
          <Stepper.Step id="t2" controls="p2">
            Step Label
          </Stepper.Step>
          <Stepper.Step id="t3" controls="p3">
            Step Label
          </Stepper.Step>
          <Stepper.Step id="t4" controls="p4">
            Step Label
          </Stepper.Step>
          <Stepper.Step id="t5" controls="p5">
            Step Label
          </Stepper.Step>
        </Stepper.List>
      </Stepper>
    </div>
  );
}

export default App;
