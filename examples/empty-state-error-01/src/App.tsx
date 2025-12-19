import { useState, useEffect } from "react";
import { Text, Flex, Link, Button } from "@servicetitan/anvil2";
import emptyStateImageLight from "../assets/empty_state-error-light.png";
import emptyStateImageDark from "../assets/empty_state-error-dark.png";

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
        <img src={emptyStateImage} alt="Error illustration" height={200} />

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
