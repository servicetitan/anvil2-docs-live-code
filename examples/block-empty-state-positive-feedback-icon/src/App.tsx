import { Flex, Text, Icon } from "@servicetitan/anvil2";
import CheckCircle from "@servicetitan/anvil2/assets/icons/material/round/check_circle.svg";

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
          svg={CheckCircle}
          size="large"
          color="var(--a2-color-blue-600)"
          aria-hidden
        />
        <Text subdued style={{ textAlign: "center" }}>
          Your report is up-to-date! Check back later for new updates.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
