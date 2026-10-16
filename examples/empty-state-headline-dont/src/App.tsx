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
          No Bookmarks
        </Text>
        <Text style={{ textAlign: "center" }}>
          You haven&apos;t bookmarked any reports yet.
        </Text>
      </Flex>
      <Button>Learn More</Button>
    </Flex>
  );
}

export default App;
