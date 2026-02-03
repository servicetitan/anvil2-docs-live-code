import { Suggestion, SuggestionList } from "@servicetitan/anvil2-ext-atlas";
import { Card, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={4} style={{ width: "388px" }}>
      <Card flexDirection="column" gap={2} background="strong">
        <Text size="medium" variant="eyebrow">
          Single Suggestion
        </Text>
        <Suggestion
          text="What can you help me with?"
          onClick={() => console.log("suggestion clicked")}
        />
      </Card>

      <Card flexDirection="column" gap={2} background="strong">
        <Text size="medium" variant="eyebrow">
          Suggestion List
        </Text>
        <SuggestionList
          suggestions={[
            "What can you help me with?",
            "Order more",
            "Show me recent updates",
          ]}
          onSelect={(suggestion) => console.log("selected:", suggestion)}
        />
      </Card>
    </Flex>
  );
}

export default App;
