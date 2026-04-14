import { AiMark, Button, Flex, Text, Textarea } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex alignItems="center" gap="3">
      <Text>Recommended estimate lines</Text>
      <AiMark
        type="gradient"
        popoverOrTooltipConfig={{
          type: "popover",
          triggerLabel: "Feedback on AI estimate suggestions",
          props: {
            placement: "right",
          },
          content: (
            <Flex direction="column" gap="2">
              <Textarea
                label="Was this suggestion helpful for your trade?"
                rows={3}
              />
              <Flex gap="2" justifyContent="flex-end">
                <Button size="small" appearance="primary" onClick={() => {}}>
                  Submit
                </Button>
              </Flex>
            </Flex>
          ),
        }}
      />
    </Flex>
  );
}

export default App;
