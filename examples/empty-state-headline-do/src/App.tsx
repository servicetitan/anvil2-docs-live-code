import { Text, Flex, Button } from "@servicetitan/anvil2";
import { EmptyStateNoSearchResults } from "@servicetitan/anvil2-illustrations";

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
        <EmptyStateNoSearchResults aria-hidden="true" height={200} />

        <Text variant="headline" el="h2">
          Bookmark Your Reports
        </Text>
        <Text style={{ textAlign: "center" }}>
          Bookmarked reports will appear here for quick access.
        </Text>
      </Flex>
      <Button>Learn More</Button>
    </Flex>
  );
}

export default App;
