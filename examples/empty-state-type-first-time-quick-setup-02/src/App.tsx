import { Text, Flex, Button, Card } from "@servicetitan/anvil2";
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
          Set Up Your Report
        </Text>
        <Text>
          Say goodbye to complex spreadsheets. You can now create and assign
          reports with custom rules.
        </Text>
      </Flex>
      <Card flexDirection="column" style={{ maxWidth: "350px" }}>
        <Text style={{ textAlign: "center" }}>
          <b>Before starting, grab these for reference:</b>
        </Text>
        <Text>- Employee Information</Text>
        <Text>- Company Information</Text>
      </Card>
      <Button appearance="primary">Get Started</Button>
    </Flex>
  );
}

export default App;
