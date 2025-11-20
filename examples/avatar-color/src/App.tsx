import { Avatar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="2">
      <Avatar color="purple" name="James" size="large" />
      <Avatar color="#0066CC" name="Nick" size="large" />
      <Avatar color="rgb(100,100,50)" name="Ben" size="large" />
    </Flex>
  );
}

export default App;
