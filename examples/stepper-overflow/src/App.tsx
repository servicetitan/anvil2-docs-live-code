import { Stepper, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="3" style={{ minWidth: "55rem" }}>
      <Stepper defaultIndex={1}>
        <Stepper.List>
          <Stepper.Step controls="p1">
            Step Label that is very long and will overflow
          </Stepper.Step>
          <Stepper.Step controls="p2">Step Label</Stepper.Step>
          <Stepper.Step controls="p3">Step Label</Stepper.Step>
          <Stepper.Step controls="p4">Step Label</Stepper.Step>
          <Stepper.Step controls="p5">Step Label</Stepper.Step>
          <Stepper.Step controls="p6">Step Label</Stepper.Step>
        </Stepper.List>
      </Stepper>
      Add vertical example here
    </Flex>
  );
}

export default App;
