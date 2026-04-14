import { AiMark, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex alignItems="center" gap="3">
      <Text>Call & job notes summary</Text>
      <AiMark
        type="gradient"
        popoverOrTooltipConfig={{
          type: "tooltip",
          content:
            "Drafted from your recorded calls and past visits. Have your team verify details before the customer sees them.",
          triggerLabel: "How AI summarizes technician notes",
        }}
      />
    </Flex>
  );
}

export default App;
