import { Stepper, Flex } from "@servicetitan/anvil2";

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
          <Stepper.Step id="t4" controls="p4">
            Step 4
          </Stepper.Step>
        </Stepper.List>
        <Stepper.Panel id="p1">Step 1 Content</Stepper.Panel>
        <Stepper.Panel id="p2">Step 2 Content</Stepper.Panel>
        <Stepper.Panel id="p3">Step 3 Content</Stepper.Panel>
        <Stepper.FinalPanel>The process is complete.</Stepper.FinalPanel>
        <Flex gap="3" justifyContent="flex-end">
          <Stepper.PrevButton />
          <Stepper.NextButton />
        </Flex>
      </Stepper>
    </div>
  );
}

export default App;
