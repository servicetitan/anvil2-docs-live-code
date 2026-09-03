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
          Get Reports
        </Text>
        <Text style={{ textAlign: "center" }}>
          Drive higher booking rates, increase revenue, and boost efficiency
          with a fully-integrated, cloud-based report system.
        </Text>
      </Flex>
      <Button appearance="primary">Upgrade Now</Button>
    </Flex>
  );
}

export default App;
