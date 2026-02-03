import { Spinner } from "@servicetitan/anvil2-ext-atlas";
import { Card, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Card
      flexDirection="column"
      gap={4}
      background="strong"
      style={{ width: "388px" }}
    >
      <Flex justifyContent="center" style={{ padding: "var(--size-4)" }}>
        <Spinner />
      </Flex>
    </Card>
  );
}

export default App;
