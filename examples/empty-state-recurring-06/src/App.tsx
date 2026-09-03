import { Text, Flex, Link, usePrefersColorScheme } from "@servicetitan/anvil2";
import emptyStateImageLight from "../assets/empty_state-success-light.png";
import emptyStateImageDark from "../assets/empty_state-success-dark.png";

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
        <img src={emptyStateImage} alt="Success illustration" height={200} />

        <Text subdued size="small" style={{ textAlign: "center" }}>
          Your report is up-to-date! Check back later for new updates. To see
          the history of changes, <Link href="#">view your sync log</Link>.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
