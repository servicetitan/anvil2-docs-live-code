import { MarkdownMessage, UserFeedback } from "@servicetitan/anvil2-ext-atlas";
import { Card } from "@servicetitan/anvil2";

function App() {
  return (
    <Card
      flexDirection="column"
      gap={4}
      background="strong"
      style={{ width: "388px" }}
    >
      <MarkdownMessage
        message="# Hello World

This is a **markdown** message with *formatting*.

- Item 1
- Item 2
- Item 3"
        assistant="Atlas"
        onRetry={() => console.log("retry clicked")}
        toolboxProps={{
          onLike: async () => console.log("like clicked"),
          onDislike: async () => console.log("dislike clicked"),
          onFlag: async () => console.log("flag clicked"),
          onPlay: async () => console.log("play clicked"),
          currentFeedback: UserFeedback.None,
        }}
      />
    </Card>
  );
}

export default App;
