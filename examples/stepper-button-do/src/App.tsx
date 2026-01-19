import { Stepper, Flex } from "@servicetitan/anvil2";

function App() {
  const stepData = [
    {
      id: "s1",
      controls: "p1",
      title: "Step 1",
      content: "Step 1",
    },
    {
      id: "s2",
      controls: "p2",
      title: "Step 2",
      content: "Step 2",
    },
    {
      id: "s3",
      controls: "p3",
      title: "Step 3",
      content: "Step 3",
    },
    {
      id: "s4",
      controls: "p4",
      title: "Step 4",
      content: "Step 4",
    },
  ];

  return (
    <Stepper allowNavigateToPrevStep flexGrow="1">
      <Stepper.List>
        {stepData.map((step) => (
          <Stepper.Step key={step.id} id={step.id} controls={step.controls}>
            {step.title}
          </Stepper.Step>
        ))}
      </Stepper.List>
      {stepData.map((step) => (
        <Stepper.Panel
          id={step.controls}
          key={step.controls}
          style={{ minHeight: "200px" }}
        >
          {step.content}
        </Stepper.Panel>
      ))}
      <Flex gap="3" justifyContent="flex-end">
        <Stepper.PrevButton />
        <Stepper.NextButton />
      </Flex>
    </Stepper>
  );
}

export default App;
