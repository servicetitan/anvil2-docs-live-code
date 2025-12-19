import { useState, useEffect } from "react";
import { Text, Flex, Link, Button } from "@servicetitan/anvil2";
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
        <img
          src={emptyStateImage}
          alt="First-time setup illustration"
          height={200}
        />

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
