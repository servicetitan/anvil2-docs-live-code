import { useState, useEffect } from "react";
import { Text, Flex, Button } from "@servicetitan/anvil2";
import emptyStateImageLight from "../assets/empty_state-no_search_results-light.png";
import emptyStateImageDark from "../assets/empty_state-no_search_results-dark.png";

function App() {
  // Temp until usePrefersColorScheme is fixed
  const [isDark, setIsDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);
  // temp end

  const emptyStateImage = isDark ? emptyStateImageDark : emptyStateImageLight;
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
