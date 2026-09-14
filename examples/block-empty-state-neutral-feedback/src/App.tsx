import { Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex justifyContent="center" style={{ padding: "2rem", width: "100%" }}>
      <Flex
        direction="column"
        alignItems="center"
        style={{ textAlign: "center", maxWidth: 480, width: "100%" }}
      >
        <Text subdued style={{ textAlign: "center" }}>
          You have no billing history. When an invoice is complete, it will
          appear here.
        </Text>
      </Flex>
    </Flex>
  );
}

export default App;
