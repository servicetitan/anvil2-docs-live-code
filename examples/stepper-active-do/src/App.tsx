import { Stepper } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "20.5rem" }}>
      <Stepper defaultIndex={1}>
        <Stepper.List>
          <Stepper.Step id="t1" controls="p1">
            Step 1
          </Stepper.Step>
          <Stepper.Step id="t2" controls="p2">
            Step 2
          </Stepper.Step>
          <Stepper.Step id="t3" controls="p3">
            Step 3
          </Stepper.Step>
        </Stepper.List>
      </Stepper>
    </div>
  );
}

export default App;
