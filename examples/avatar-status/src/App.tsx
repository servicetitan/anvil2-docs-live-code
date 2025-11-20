import { Avatar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="2">
      <Avatar status="online" name="Ryan" size="large" />
      <Avatar status="offline" name="Patrick" size="large" />
      <Avatar name="Derek" size="large" />
    </Flex>
  );
}

export default App;
