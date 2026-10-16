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
          Looks like Reports haven&apos;t been set up yet
        </Text>
        <Text style={{ textAlign: "center" }}>
          Set it up today to start improving your business through our
          integrated system.
        </Text>
      </Flex>
      <Button appearance="primary">Start Setup</Button>
    </Flex>
  );
}

export default App;
