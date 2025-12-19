import { useState, useEffect } from "react";
import { Text, Flex } from "@servicetitan/anvil2";
import emptyStateImageLight from "../assets/empty_state-user_cleared-light.png";
import emptyStateImageDark from "../assets/empty_state-user_cleared-dark.png";

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
          alt="Background processing illustration"
          height={200}
        />

        <Text variant="headline" el="h2">
          You Account is Being Migrated
        </Text>
        <Text subdued style={{ textAlign: "center" }}>
          We are working on setting up your account. Verifying the information
          can take up to 3 business days. You will receive an email when your
          account is ready.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
