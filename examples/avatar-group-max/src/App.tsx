import { Avatar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex justifyContent="center">
      <Avatar.Group max={3}>
        <Avatar name="James M." />
        <Avatar name="Ben R." />
        <Avatar name="Adam G." />
        <Avatar name="Adam G." />
        <Avatar name="Adam G." />
        <Avatar name="Adam G." />
        <Avatar name="Adam G." />
        <Avatar name="Adam G." />
      </Avatar.Group>
    </Flex>
  );
}

export default App;
