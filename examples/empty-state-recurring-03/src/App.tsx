import { Text, Flex, Icon } from "@servicetitan/anvil2";
import NotInterested from "@servicetitan/anvil2/assets/icons/material/round/not_interested.svg";
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
        svg={NotInterested}
        size="xlarge"
        color={core.semantic.ForegroundColorDanger.value}
      />
      <Text subdued size="small" style={{ textAlign: "center" }}>
        No results found. Try another search or create a new report by clicking
        the button above.
      </Text>
    </Flex>
  );
}

export default App;
