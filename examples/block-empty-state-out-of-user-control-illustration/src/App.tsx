import { Flex, Text, usePrefersColorScheme } from "@servicetitan/anvil2";
import UserClearedLight from "@servicetitan/anvil2-illustrations/illustrations/empty-state-user-cleared-light.svg";
import UserClearedDark from "@servicetitan/anvil2-illustrations/illustrations/empty-state-user-cleared-dark.svg";

function App() {
  const { mode } = usePrefersColorScheme();
  const Illustration = mode === "dark" ? UserClearedDark : UserClearedLight;

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
            Your Account is Being Migrated
          </Text>
          <Text subdued>
            We are working on setting up your account. Verifying the information
            can take up to 3 business days. You will receive an email when your
            account is ready.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
