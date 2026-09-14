import { Flex, Text, Icon } from "@servicetitan/anvil2";
import MoneyOff from "@servicetitan/anvil2/assets/icons/material/round/money_off.svg";

function App() {
  return (
    <Flex justifyContent="center" style={{ padding: "2rem", width: "100%" }}>
      <Flex
        direction="column"
        alignItems="center"
        gap={4}
        style={{ textAlign: "center", maxWidth: 480, width: "100%" }}
      >
        <Icon
          svg={MoneyOff}
          size="large"
          color="var(--a2-foreground-color-subdued)"
          aria-hidden
        />
        <Text subdued style={{ textAlign: "center" }}>
          You have no billing history. When an invoice is complete, it will
          appear here.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
