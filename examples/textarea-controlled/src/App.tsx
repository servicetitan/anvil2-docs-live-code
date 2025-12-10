import { Textarea, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [comment, setComment] = useState<string>();

  return (
    <Flex direction="column" gap="2">
      <Textarea
        label="Comment"
        description="Tell us your thoughts!"
        value={comment}
        onChange={(e) => {
          setComment(e?.target.value);
        }}
      />
      <Flex alignSelf="flex-end" gap="2">
        <Button onClick={() => setComment("")} size="small">
          Clear
        </Button>
        <Button
          onClick={() => alert(comment)}
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
