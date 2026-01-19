import { Skeleton, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="row" gap="5">
      <Skeleton.Circle />
      <Skeleton.Circle diameter="50px" />
      <Skeleton.Circle diameter="4rem" />
    </Flex>
  );
}

export default App;
