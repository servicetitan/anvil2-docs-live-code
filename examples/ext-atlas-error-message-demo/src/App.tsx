import { ErrorMessage } from "@servicetitan/anvil2-ext-atlas";
import { Card, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={4} style={{ width: "388px" }}>
      <Card flexDirection="column" gap={2} background="strong">
        <Text size="medium" variant="eyebrow">
          With Error String
        </Text>
        <ErrorMessage
          error="Failed to load response"
          message="Previous message content"
          onRetry={() => console.log("retry clicked")}
        />
      </Card>

      <Card flexDirection="column" gap={2} background="strong">
        <Text size="medium" variant="eyebrow">
          With Error Boolean
        </Text>
        <ErrorMessage
          error={true}
          message="An error occurred while processing your request"
          onRetry={() => console.log("retry clicked")}
        />
      </Card>
    </Flex>
  );
}

export default App;
