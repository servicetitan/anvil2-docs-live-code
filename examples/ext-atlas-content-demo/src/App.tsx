import { Content, UserMessage } from "@servicetitan/anvil2-ext-atlas";
import { Card } from "@servicetitan/anvil2";

function App() {
  return (
    <Card
      flexDirection="column"
      gap={2}
      background="strong"
      padding="0"
      style={{ height: "300px", width: "388px" }}
    >
      <Content itemsLength={3}>
        <UserMessage message="First message" />
        <UserMessage message="Second message" />
        <UserMessage message="Third message" />
      </Content>
    </Card>
  );
}

export default App;
