import { Text, Flex, Card, Icon, Button, Divider } from "@servicetitan/anvil2";
import emptyStateImageLight from "../assets/empty_state-no_search_results-light.png";
import emptyStateImageDark from "../assets/empty_state-no_search_results-dark.png";
import { core } from "@servicetitan/anvil2/token";
import { useEffect, useState } from "react";
import Circle from "@servicetitan/anvil2/assets/icons/material/round/circle.svg";

function App() {
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
    >
      <Flex alignItems="center" direction="column">
        <img src={emptyStateImage} alt="No results illustration" height={200} />
        <Text variant="headline" el="h2">
          Sorry, we couldn&apos;t find any results for &quot;
          <span style={{ color: core.semantic.ForegroundColorPrimary.value }}>
            jfjkleiklfj
          </span>
          &quot;
        </Text>
        <Text style={{ textAlign: "center", maxWidth: "420px" }}>
          Remember to check your spelling or try searching for something else.
        </Text>
      </Flex>
      <Flex direction="column" gap={2}>
        <Text variant="headline" el="h3" size="small">
          Try these items instead
        </Text>
        <Card gap={4} alignItems="center" flexDirection="column">
          <Flex direction="row" gap={4} alignItems="center">
            <Flex direction="column" style={{ minWidth: "160px" }}>
              <Text variant="headline" el="h4" size="small">
                Item 1
              </Text>
              <Text subdued size="small">
                Item Description
              </Text>
            </Flex>
            <Flex direction="row" gap={2} alignItems="center">
              <Icon
                svg={Circle}
                color={core.semantic.StatusColorSuccess.value}
                size="small"
              />
              <Text size="small">25%</Text>
            </Flex>
            <Button>Select</Button>
          </Flex>
          <Divider />
          <Flex direction="row" gap={4} alignItems="center">
            <Flex direction="column" style={{ minWidth: "160px" }}>
              <Text variant="headline" el="h4" size="small">
                Item 1
              </Text>
              <Text subdued size="small">
                Item Description
              </Text>
            </Flex>
            <Flex direction="row" gap={2} alignItems="center">
              <Icon
                svg={Circle}
                color={core.semantic.StatusColorSuccess.value}
                size="small"
              />
              <Text size="small">25%</Text>
            </Flex>
            <Button>Select</Button>
          </Flex>
          <Divider />
          <Flex direction="row" gap={4} alignItems="center">
            <Flex direction="column" style={{ minWidth: "160px" }}>
              <Text variant="headline" el="h4" size="small">
                Item 1
              </Text>
              <Text subdued size="small">
                Item Description
              </Text>
            </Flex>
            <Flex direction="row" gap={2} alignItems="center">
              <Icon
                svg={Circle}
                color={core.semantic.StatusColorSuccess.value}
                size="small"
              />
              <Text size="small">25%</Text>
            </Flex>
            <Button>Select</Button>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}

export default App;
