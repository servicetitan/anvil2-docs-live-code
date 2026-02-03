import { UserMessage } from "@servicetitan/anvil2-ext-atlas";
import { Card } from "@servicetitan/anvil2";

function App() {
  return (
    <Card
      flexDirection="column"
      gap={4}
      background="strong"
      style={{ width: "388px" }}
    >
      <UserMessage
        message="This is a user message"
        isError={false}
        onRetry={() => console.log("retry clicked")}
      />
    </Card>
  );
}

export default App;
