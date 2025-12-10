import { Textarea, Flex, Button } from "@servicetitan/anvil2";
import { useRef } from "react";

function App() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <Flex direction="column" gap="2">
      <Textarea
        label="Comment"
        description="Tell us your thoughts!"
        ref={textareaRef}
      />
      <Flex alignSelf="flex-end" gap="2">
        <Button
          onClick={() => {
            if (textareaRef.current) {
              textareaRef.current.value = "";
            }
          }}
          size="small"
        >
          Clear
        </Button>
        <Button
          onClick={() => {
            if (textareaRef.current) {
              alert(textareaRef.current.value);
            }
          }}
          appearance="primary"
          size="small"
        >
          Leave comment
        </Button>
      </Flex>
    </Flex>
  );
}

export default App;
