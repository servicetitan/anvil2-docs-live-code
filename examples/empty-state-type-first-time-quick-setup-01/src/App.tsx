import {
  Text,
  Flex,
  Button,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import emptyStateImageLight from "../assets/empty_state-first_use-light.png";
import emptyStateImageDark from "../assets/empty_state-first_use-dark.png";

function App() {
  const { mode } = usePrefersColorScheme();

  const emptyStateImage =
    mode === "dark" ? emptyStateImageDark : emptyStateImageLight;
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
          Set Up Your Report
        </Text>
        <Text style={{ textAlign: "center" }}>
          You can now create reports with rules based on your business needs.
          Then assign employees to each report. No more complex spreadsheets
          just to keep track of your business health.
        </Text>
      </Flex>
      <Button appearance="primary">Get Started</Button>
    </Flex>
  );
}

export default App;
