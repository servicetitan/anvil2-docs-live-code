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
          Set Up Your Reports
        </Text>
        <Text style={{ textAlign: "center" }}>
          You can now create reports with rules based on your business needs. No
          more complex spreadsheets just to keep track of your business health.
        </Text>
      </Flex>
      <Button appearance="primary">Get Started</Button>
    </Flex>
  );
}

export default App;
