import { Toolbox, UserFeedback } from "@servicetitan/anvil2-ext-atlas";
import { Card, Flex, Text } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState<UserFeedback>(UserFeedback.None);

  return (
    <Flex direction="column" gap={4} style={{ width: "388px" }}>
      <Card flexDirection="column" gap={2} background="strong">
        <Text size="medium" variant="eyebrow">
          All Actions Available
        </Text>
        <Toolbox
          text="This is a sample response text that can be copied to clipboard."
          onRetry={async () => console.log("retry clicked")}
          onLike={async () => {
            console.log("like clicked");
            setFeedback(UserFeedback.Positive);
          }}
          onDislike={async () => {
            console.log("dislike clicked");
            setFeedback(UserFeedback.Negative);
          }}
          onFlag={async () => console.log("flag clicked")}
          onPlay={async () => console.log("play clicked")}
          currentFeedback={feedback}
        />
      </Card>
    </Flex>
  );
}

export default App;
