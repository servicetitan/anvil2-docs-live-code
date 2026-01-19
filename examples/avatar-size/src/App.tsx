import { Avatar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="3" justifyContent="center" alignItems="center">
      <Avatar name="Small" size="small" />
      <Avatar name="Medium" size="medium" />
      <Avatar name="Large" size="large" />
    </Flex>
  );
}

export default App;
