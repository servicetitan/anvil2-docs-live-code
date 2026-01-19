import { Stepper, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="3" style={{ minWidth: "20.5rem" }}>
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
        </Stepper.List>
      </Stepper>
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
          <Stepper.Step id="t6" controls="p6">
            Step Label
          </Stepper.Step>
        </Stepper.List>
      </Stepper>
    </Flex>
  );
}

export default App;
