import { Flex, Icon, Text } from "@servicetitan/anvil2";
import { core } from "@servicetitan/anvil2/token";
import NotInterested from "@servicetitan/anvil2/assets/icons/material/round/not_interested.svg";

function App() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      style={{ maxWidth: "420px", textAlign: "center", margin: "0 auto" }}
    >
      <Icon
        size="xlarge"
        svg={NotInterested}
        style={{ color: core.semantic?.StatusColorDanger?.value }}
      />
      <Text variant="headline" size="medium" el="h1">
        No results found
      </Text>
      <Text variant="body" subdued>
        Try another search or create a new report by clicking the button above.
      </Text>
    </Flex>
  );
}

export default App;
