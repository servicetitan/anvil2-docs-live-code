import { useState, useEffect } from "react";
import { Text, Flex } from "@servicetitan/anvil2";
import emptyStateImageLight from "../assets/empty_state-first_use-light.png";
import emptyStateImageDark from "../assets/empty_state-first_use-dark.png";

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
        <img
          src={emptyStateImage}
          alt="First-time setup illustration"
          height={200}
        />

        <Text variant="headline" el="h2">
          Build a Custom Report
        </Text>
        <Text style={{ textAlign: "center" }}>
          Click &quot;Add Filter&quot; in the left column to include or exclude
          specific characteristics of your audience. You can nest segment logic
          and have as many segments as you need.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
