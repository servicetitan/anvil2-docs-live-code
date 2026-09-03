import {
  Text,
  Flex,
  Link,
  Button,
  usePrefersColorScheme,
} from "@servicetitan/anvil2";
import emptyStateImageLight from "../assets/empty_state-error-light.png";
import emptyStateImageDark from "../assets/empty_state-error-dark.png";

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
        <img src={emptyStateImage} alt="Error illustration" height={200} />

        <Text variant="headline" el="h2">
          We Didn&apos;t Catch That
        </Text>
        <Text subdued style={{ textAlign: "center" }}>
          The server didn&apos;t recognize your request. We are currently
          investigating the problem. Go back or <Link href="#">try again</Link>.
        </Text>
      </Flex>
      <Button>Go Back</Button>
    </Flex>
  );
}

export default App;
