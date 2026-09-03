import {
  AnvilProvider,
  Button,
  Card,
  Flex,
  Text,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import NoSearchResultsLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-no-search-results-light.svg";
import NoSearchResultsDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-no-search-results-dark.svg";

function App() {
  const { mode } = usePrefersColorScheme();

  const NoSearchResults =
    mode === "dark" ? NoSearchResultsDark : NoSearchResultsLight;

  return (
    <AnvilProvider themeData={{ mode }}>
      <Card padding="large">
        <Flex direction="column" alignItems="center" gap={4}>
          <NoSearchResults aria-hidden="true" height={200} />
          <Text variant="headline" el="h2">
            No matching jobs
          </Text>
          <Text subdued style={{ textAlign: "center" }}>
            Try a different name or clear filters to see all jobs.
          </Text>
          <Button appearance="secondary">Clear Filters</Button>
        </Flex>
      </Card>
    </AnvilProvider>
  );
}

export default App;
