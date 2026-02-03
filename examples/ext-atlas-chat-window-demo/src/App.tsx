import { ChatWindow } from "@servicetitan/anvil2-ext-atlas";
import { Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <ChatWindow open={true} fullscreen={false} position={{ x: 40, y: 40 }}>
      <Flex direction="column" style={{ height: "100%", padding: "1rem" }}>
        <Text>Chat content goes here</Text>
      </Flex>
    </ChatWindow>
  );
}

export default App;
