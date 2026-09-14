import { Flex, Text, Icon, Link } from "@servicetitan/anvil2";
import Error from "@servicetitan/anvil2/assets/icons/material/round/error.svg";

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
          svg={Error}
          size="large"
          color="var(--a2-foreground-color-subdued)"
          aria-hidden
        />
        <Text subdued style={{ textAlign: "center" }}>
          The server didn’t recognize your request. We are currently
          investigating the problem. Go back or <Link href="#">try again</Link>.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
