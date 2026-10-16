import { Text, Flex, Link, Button } from "@servicetitan/anvil2";
import { EmptyStateError } from "@servicetitan/anvil2-illustrations";

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
        <EmptyStateError aria-hidden="true" height={200} />

        <Text variant="headline" el="h2">
          We Didn&apos;t Catch That
        </Text>
        <Text subdued style={{ textAlign: "center" }}>
          The server didn&apos;t recognize your request. We are currently
          investigating the problem. Go back or <Link href="#">try again</Link>.
        </Text>
      </Flex>
      <Button>Go Back</Button>
    </Flex>
  );
}

export default App;
