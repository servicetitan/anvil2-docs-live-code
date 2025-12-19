import { Text, Flex, Icon, Link } from "@servicetitan/anvil2";
import Error from "@servicetitan/anvil2/assets/icons/material/round/error.svg";
import { core } from "@servicetitan/anvil2/token";

function App() {
  return (
    <Flex
      alignItems="center"
      direction="column"
      gap={2}
      style={{ maxWidth: "420px" }}
    >
      <Icon
        svg={Error}
        size="xlarge"
        color={core.semantic.ForegroundColorSubdued.value}
      />
      <Text subdued style={{ textAlign: "center" }}>
        The server didn&apos;t recognize your request. We are currently
        investigating the problem. Go back or <Link href="#">try again</Link>.
      </Text>
    </Flex>
  );
}

export default App;
