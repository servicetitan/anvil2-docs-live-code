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
          Welcome to Your Reports Walkthrough
        </Text>
        <Text style={{ textAlign: "center" }}>
          We will now teach you how to create reports with rules base don your
          business needs. This walkthrough will take 5-10 minutes.
        </Text>
      </Flex>
      <Button appearance="primary">Get Started</Button>
    </Flex>
  );
}

export default App;
