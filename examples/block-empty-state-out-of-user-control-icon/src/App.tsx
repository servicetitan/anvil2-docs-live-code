import { Flex, Text, Icon } from "@servicetitan/anvil2";
import Build from "@servicetitan/anvil2/assets/icons/material/round/build.svg";

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
          svg={Build}
          size="large"
          color="var(--a2-foreground-color-subdued)"
          aria-hidden
        />
        <Text subdued style={{ textAlign: "center" }}>
          This account is going through routine maintenance. Your connection
          should resume as normal in a couple hours.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
