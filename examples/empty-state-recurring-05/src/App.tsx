import { Text, Flex, Icon } from "@servicetitan/anvil2";
import CheckCircle from "@servicetitan/anvil2/assets/icons/material/round/check_circle_outline.svg";
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
        svg={CheckCircle}
        size="xlarge"
        color={core.semantic.ForegroundColorPrimary.value}
      />
      <Text subdued size="small" style={{ textAlign: "center" }}>
        Your report is up-to-date! Check back later for new updates.
      </Text>
    </Flex>
  );
}

export default App;
