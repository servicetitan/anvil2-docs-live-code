import {
  Avatar,
  Button,
  Divider,
  Flex,
  Text,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import Add from "@servicetitan/anvil2/assets/icons/material/round/add.svg";
import NoSearchResultsLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-no-search-results-light.svg";
import NoSearchResultsDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-no-search-results-dark.svg";

function App() {
  const { mode } = usePrefersColorScheme();
  const Illustration =
    mode === "dark" ? NoSearchResultsDark : NoSearchResultsLight;

  return (
    <Flex justifyContent="center" style={{ padding: "2rem", width: "100%" }}>
      <Flex direction="column" gap={5} style={{ maxWidth: 600, width: "100%" }}>
        <Flex
          direction="column"
          alignItems="center"
          gap={1}
          style={{ textAlign: "center", width: "100%" }}
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
          <Text size="large" inline style={{ fontWeight: "bold" }}>
            Sorry, we couldn’t find any results for{" "}
            <Text inline style={{ color: "var(--a2-color-blue-600)" }}>
              “jfjkleiklfj”
            </Text>
          </Text>
          <Text subdued>
            Remember to check your spelling or try searching for something else.
          </Text>
        </Flex>

        <Text inline style={{ fontWeight: "bold" }}>
          Try these instead:
        </Text>

        <Flex direction="column" style={{ width: "100%" }}>
          <Divider spacing="4" />
          <Flex
            alignItems="center"
            justifyContent="space-between"
            gap={3}
            style={{ width: "100%" }}
          >
            <Flex alignItems="center" gap={2} style={{ minWidth: 0 }}>
              <Avatar name="Lindsay Walton" size="medium" />
              <Flex direction="column" style={{ minWidth: 0 }}>
                <Text inline style={{ fontWeight: "bold" }}>
                  Lindsay Walton
                </Text>
                <Text subdued size="small">
                  Front-end Developer
                </Text>
              </Flex>
            </Flex>
            <Button
              appearance="secondary"
              icon={{ before: Add }}
              onClick={() => console.log("Invite Lindsay Walton")}
              style={{ flexShrink: 0 }}
            >
              Invite
            </Button>
          </Flex>
          <Divider spacing="4" />

          <Flex
            alignItems="center"
            justifyContent="space-between"
            gap={3}
            style={{ width: "100%" }}
          >
            <Flex alignItems="center" gap={2} style={{ minWidth: 0 }}>
              <Avatar name="Courtney Henry" size="medium" />
              <Flex direction="column" style={{ minWidth: 0 }}>
                <Text inline style={{ fontWeight: "bold" }}>
                  Courtney Henry
                </Text>
                <Text subdued size="small">
                  Designer
                </Text>
              </Flex>
            </Flex>
            <Button
              appearance="secondary"
              icon={{ before: Add }}
              onClick={() => console.log("Invite Courtney Henry")}
              style={{ flexShrink: 0 }}
            >
              Invite
            </Button>
          </Flex>
          <Divider spacing="4" />

          <Flex
            alignItems="center"
            justifyContent="space-between"
            gap={3}
            style={{ width: "100%" }}
          >
            <Flex alignItems="center" gap={2} style={{ minWidth: 0 }}>
              <Avatar name="Tom Cook" size="medium" />
              <Flex direction="column" style={{ minWidth: 0 }}>
                <Text inline style={{ fontWeight: "bold" }}>
                  Tom Cook
                </Text>
                <Text subdued size="small">
                  Director of Product
                </Text>
              </Flex>
            </Flex>
            <Button
              appearance="secondary"
              icon={{ before: Add }}
              onClick={() => console.log("Invite Tom Cook")}
              style={{ flexShrink: 0 }}
            >
              Invite
            </Button>
          </Flex>
          <Divider spacing="4" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
