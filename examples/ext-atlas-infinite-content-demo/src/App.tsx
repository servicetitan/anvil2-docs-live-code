import { InfiniteContent } from "@servicetitan/anvil2-ext-atlas";
import { Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex
      direction="column"
      gap={2}
      style={{ height: "300px", border: "1px dashed #ccc", padding: "1rem" }}
    >
      <Text size="medium" variant="eyebrow">
        With Content
      </Text>
      <InfiniteContent
        hasMore={true}
        onLoadMore={() => console.log("load more")}
      >
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
      </InfiniteContent>
    </Flex>
  );
}

export default App;
