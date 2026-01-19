import { Avatar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex justifyContent="center">
      <Avatar.Group max={3}>
        <Avatar status="online" name="James M." />
        <Avatar status="offline" name="Ben R." />
        <Avatar status="online" name="Adam G." />
        <Avatar status="online" name="Adam G." />
        <Avatar status="offline" name="Adam G." />
        <Avatar status="offline" name="Adam G." />
        <Avatar status="online" name="Adam G." />
        <Avatar status="online" name="Adam G." />
      </Avatar.Group>
    </Flex>
  );
}

export default App;
