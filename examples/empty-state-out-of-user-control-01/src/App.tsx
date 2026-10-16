import { Text, Flex } from "@servicetitan/anvil2";
import { EmptyStateUserCleared } from "@servicetitan/anvil2-illustrations";

function App() {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      gap={6}
      style={{ maxWidth: "420px" }}
    >
      <Flex alignItems="center" direction="column">
        <EmptyStateUserCleared aria-hidden="true" height={200} />

        <Text variant="headline" el="h2">
          Your Account is Being Migrated
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
