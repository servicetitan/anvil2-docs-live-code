import { Stepper, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="10" style={{ minWidth: "20.5rem" }}>
      <Stepper>
        <Stepper.List>
          <Stepper.Step id="t0" controls="p0">
            One step Stepper
          </Stepper.Step>
        </Stepper.List>
      </Stepper>
      <Stepper>
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
          <Stepper.Step id="t4" controls="p4">
            Step 4
          </Stepper.Step>
          <Stepper.Step id="t5" controls="p5">
            Step 5
          </Stepper.Step>
          <Stepper.Step id="t6" controls="p6">
            Step 6
          </Stepper.Step>
          <Stepper.Step id="t7" controls="p7">
            Step 7
          </Stepper.Step>
        </Stepper.List>
      </Stepper>
    </Flex>
  );
}

export default App;
