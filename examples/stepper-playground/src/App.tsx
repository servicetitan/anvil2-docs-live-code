import { Stepper, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "55rem" }}>
      <Stepper defaultIndex={1}>
        <Stepper.List>
          <Stepper.Step id="t1" controls="p1">
            First Step
          </Stepper.Step>
          <Stepper.Step id="t2" controls="p2">
            Second Step
          </Stepper.Step>
          <Stepper.Step id="t3" controls="p3">
            Third Step
          </Stepper.Step>
        </Stepper.List>
        <Flex gap="3" justifyContent="flex-end">
          <Stepper.PrevButton />
          <Stepper.NextButton />
        </Flex>
      </Stepper>
    </div>
  );
}

export default App;
