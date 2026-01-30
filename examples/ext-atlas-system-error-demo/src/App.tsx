import { SystemError } from "@servicetitan/anvil2-ext-atlas";
import { Card, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={4} style={{ width: "388px" }}>
      <Card style={{ height: "200px" }} background="strong">
        <Text size="medium" variant="eyebrow">
          Default Error
        </Text>
        <SystemError />
      </Card>

      <Card style={{ height: "200px" }} background="strong">
        <Text size="medium" variant="eyebrow">
          Custom Error
        </Text>
        <SystemError
          title="Connection Failed"
          description="Unable to connect to the server. Please check your internet connection."
          iconColor="var(--foreground-color-danger)"
        />
      </Card>
    </Flex>
  );
}

export default App;
