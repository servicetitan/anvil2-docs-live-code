import {
  Flex,
  Text,
  Button,
  Link,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import ErrorLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-error-light.svg";
import ErrorDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-error-dark.svg";

function App() {
  const { mode } = usePrefersColorScheme();
  const Illustration = mode === "dark" ? ErrorDark : ErrorLight;

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
            We Didn’t Catch That
          </Text>
          <Text subdued>
            The server didn’t recognize your request. We are currently
            investigating the problem. Go back or{" "}
            <Link href="#">try again</Link>.
          </Text>
        </Flex>
        <Button appearance="secondary" onClick={() => console.log("Go Back")}>
          Go Back
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
