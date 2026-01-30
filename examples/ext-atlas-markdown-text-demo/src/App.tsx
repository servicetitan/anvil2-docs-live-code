import { MarkdownText } from "@servicetitan/anvil2-ext-atlas";
import { Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={4}>
      <Flex direction="column" gap={2}>
        <Text size="medium" variant="eyebrow">
          Simple Text
        </Text>
        <MarkdownText text="This is plain text." />
      </Flex>

      <Flex direction="column" gap={2}>
        <Text size="medium" variant="eyebrow">
          Bold and Italic
        </Text>
        <MarkdownText text="This is **bold** and this is *italic*." />
      </Flex>

      <Flex direction="column" gap={2}>
        <Text size="medium" variant="eyebrow">
          Code Block
        </Text>
        <MarkdownText
          text={`\`\`\`javascript\nconst hello = 'world';\n\`\`\``}
        />
      </Flex>
    </Flex>
  );
}

export default App;
