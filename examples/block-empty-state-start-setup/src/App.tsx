import {
  Flex,
  Text,
  Button,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import FirstUseLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-first-use-light.svg";
import FirstUseDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-first-use-dark.svg";

function App() {
  const { mode } = usePrefersColorScheme();
  const Illustration = mode === "dark" ? FirstUseDark : FirstUseLight;

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
            Looks like Reports haven’t been set up yet
          </Text>
          <Text subdued>
            Set it up today to start improving your business through our
            integrated system.
          </Text>
        </Flex>
        <Button appearance="primary" onClick={() => console.log("Start Setup")}>
          Start Setup
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
