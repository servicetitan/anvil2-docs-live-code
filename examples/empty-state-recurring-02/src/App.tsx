import { Text, Flex, Icon } from "@servicetitan/anvil2";
import MoneyOff from "@servicetitan/anvil2/assets/icons/material/round/money_off.svg";
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
        svg={MoneyOff}
        size="xlarge"
        color={core.semantic.ForegroundColorSubdued.value}
      />
      <Text subdued size="small" style={{ textAlign: "center" }}>
        You have no billing history. When an invoice is complete, it will appear
        here. View active invoices.
      </Text>
    </Flex>
  );
}

export default App;
