import { Text, Flex, Link } from "@servicetitan/anvil2";
import { EmptyStateSuccess } from "@servicetitan/anvil2-illustrations";

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
        <EmptyStateSuccess aria-hidden="true" height={200} />

        <Text subdued size="small" style={{ textAlign: "center" }}>
          Your report is up-to-date! Check back later for new updates. To see
          the history of changes, <Link href="#">view your sync log</Link>.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
