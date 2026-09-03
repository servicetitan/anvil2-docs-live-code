import {
  Text,
  Flex,
  Button,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import emptyStateImageLight from "../assets/empty_state-no_search_results-light.png";
import emptyStateImageDark from "../assets/empty_state-no_search_results-dark.png";

function App() {
  const { mode } = usePrefersColorScheme();

  const emptyStateImage =
    mode === "dark" ? emptyStateImageDark : emptyStateImageLight;
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      gap={6}
      style={{ maxWidth: "420px" }}
    >
      <Flex alignItems="center" direction="column">
        <img src={emptyStateImage} alt="No results illustration" height={200} />

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
