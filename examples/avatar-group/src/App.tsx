import { Avatar, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={4}>
      <Avatar.Group>
        <Avatar size="large" name="James M." />
        <Avatar size="large" name="Ben R." />
        <Avatar size="large" name="Adam G." />
      </Avatar.Group>
      <Avatar.Group>
        <Avatar size="medium" name="James M." />
        <Avatar size="medium" name="Ben R." />
        <Avatar size="medium" name="Adam G." />
      </Avatar.Group>
      <Avatar.Group>
        <Avatar size="small" name="James M." />
        <Avatar size="small" name="Ben R." />
        <Avatar size="small" name="Adam G." />
      </Avatar.Group>
    </Flex>
  );
}

export default App;
