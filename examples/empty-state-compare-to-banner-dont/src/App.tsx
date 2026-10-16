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
          Get Reports
        </Text>
        <Text style={{ textAlign: "center" }}>
          Drive higher booking rates, increase revenue, and boost efficiency
          with a fully-integrated, cloud-based report system.
        </Text>
      </Flex>
      <Button appearance="primary">Upgrade Now</Button>
    </Flex>
  );
}

export default App;
