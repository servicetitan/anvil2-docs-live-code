import { Skeleton, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="5" style={{ width: "300px" }}>
      <Skeleton.Rectangle />
      <Skeleton.Rectangle height="4rem" />
      <Skeleton.Rectangle height="100px" />
    </Flex>
  );
}

export default App;
