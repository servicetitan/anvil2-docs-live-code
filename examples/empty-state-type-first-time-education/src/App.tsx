import { Text, Flex } from "@servicetitan/anvil2";
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
          Click &quot;Add Filter&quot; in the left column to include or exclude
          specific characteristics of your audience. You can nest segment logic
          and have as many segments as you need.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
