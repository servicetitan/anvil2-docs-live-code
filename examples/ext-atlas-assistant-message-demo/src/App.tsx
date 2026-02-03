import { AssistantMessage } from "@servicetitan/anvil2-ext-atlas";
import { Card } from "@servicetitan/anvil2";

function App() {
  return (
    <Card
      flexDirection="column"
      gap={4}
      background="strong"
      style={{ width: "388px" }}
    >
      <AssistantMessage
        message="This is an assistant message response."
        assistant="Atlas"
        onRetry={() => console.log("retry clicked")}
      />
    </Card>
  );
}

export default App;
