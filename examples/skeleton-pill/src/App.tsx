import { Skeleton, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="5">
      <Skeleton.Pill />
      <Skeleton.Pill width="50px" />
      <Skeleton.Pill width="6rem" />
    </Flex>
  );
}

export default App;
