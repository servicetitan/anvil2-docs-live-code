import {
  Flex,
  Text,
  Button,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import NoSearchResultsLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-no-search-results-light.svg";
import NoSearchResultsDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-no-search-results-dark.svg";

function App() {
  const { mode } = usePrefersColorScheme();
  const Illustration =
    mode === "dark" ? NoSearchResultsDark : NoSearchResultsLight;

  return (
    <Flex justifyContent="center" style={{ padding: "2rem", width: "100%" }}>
      <Flex
        direction="column"
        alignItems="center"
        gap={4}
        style={{ textAlign: "center", maxWidth: 480, width: "100%" }}
      >
        <div
          style={{
            flexShrink: 0,
            width: 300,
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          <Illustration
            aria-hidden
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </div>
        <Flex direction="column" alignItems="center" gap={2}>
          <Text size="large" inline style={{ fontWeight: "bold" }}>
            Bookmark Your Reports
          </Text>
          <Text subdued>
            Bookmarked reports will appear here for quick access.
          </Text>
        </Flex>
        <Button
          appearance="secondary"
          onClick={() => console.log("Learn More")}
        >
          Learn More
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
