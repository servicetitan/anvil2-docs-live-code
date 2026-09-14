import { Flex, Text, Icon, Link } from "@servicetitan/anvil2";
import Block from "@servicetitan/anvil2/assets/icons/material/round/block.svg";

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
          svg={Block}
          size="large"
          color="var(--a2-color-red-600)"
          aria-hidden
        />
        <Text subdued style={{ textAlign: "center" }}>
          No results found. Try another search or{" "}
          <Link href="#">create a new report</Link>.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
