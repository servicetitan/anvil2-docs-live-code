import { Text, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex alignItems="center" direction="column" style={{ maxWidth: "420px" }}>
      <Text subdued size="small" style={{ textAlign: "center" }}>
        You have no billing history. When an invoice is complete, it will appear
        here.
      </Text>
    </Flex>
  );
}

export default App;
