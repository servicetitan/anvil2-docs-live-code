import { Flex, Text, Link, usePrefersColorScheme } from "@servicetitan/anvil2";
import SuccessLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-success-light.svg";
import SuccessDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-success-dark.svg";

function App() {
  const { mode } = usePrefersColorScheme();
  const Illustration = mode === "dark" ? SuccessDark : SuccessLight;

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
        <Text subdued style={{ textAlign: "center" }}>
          Your report is up-to-date! Check back later for new updates. To see
          the history of changes, <Link href="#">view your sync log</Link>.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
