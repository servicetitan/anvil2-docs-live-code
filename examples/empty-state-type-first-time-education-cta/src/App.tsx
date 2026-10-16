import { Text, Flex, Button } from "@servicetitan/anvil2";
import { EmptyStateFirstUse } from "@servicetitan/anvil2-illustrations";

function App() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      gap={6}
      style={{ maxWidth: "420px" }}
    >
      <Flex alignItems="center" direction="column">
        <EmptyStateFirstUse aria-hidden="true" height={200} />

        <Text variant="headline" el="h2">
          Build a Custom Report
        </Text>
        <Text style={{ textAlign: "center" }}>
          Not sure how to get started? Let us take you through a quick
          walk-through.
        </Text>
      </Flex>
      <Button>Learn More</Button>
    </Flex>
  );
}

export default App;
