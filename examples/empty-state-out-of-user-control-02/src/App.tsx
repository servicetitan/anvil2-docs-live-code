import { Text, Flex, Icon } from "@servicetitan/anvil2";
import Build from "@servicetitan/anvil2/assets/icons/material/round/build.svg";
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
        svg={Build}
        size="xlarge"
        color={core.semantic.ForegroundColorSubdued.value}
      />
      <Text subdued style={{ textAlign: "center" }}>
        This account is going through routine maintenance. Your connection
        should resume as normal in a couple hours.
      </Text>
    </Flex>
  );
}

export default App;
