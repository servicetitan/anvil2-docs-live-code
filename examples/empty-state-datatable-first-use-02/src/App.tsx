import { Text, Flex, Link, Button } from "@servicetitan/anvil2";
import { EmptyStateFirstUse } from "@servicetitan/anvil2-illustrations";

function App() {
  return (
    <Flex
      gap={6}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        alignItems="center"
        direction="column"
        style={{ maxWidth: "420px" }}
      >
        <EmptyStateFirstUse aria-hidden="true" height={200} />

        <Text variant="headline" el="h2">
          Create Your First Report
        </Text>
        <Text subdued style={{ textAlign: "center" }}>
          \ Ready to build a great report? If you&apos;re not sure where to
          start, we&apos;ll show you the ropes. <Link href="#">Learn More</Link>
        </Text>
      </Flex>
      <Button>Get Started</Button>
    </Flex>
  );
}

export default App;
