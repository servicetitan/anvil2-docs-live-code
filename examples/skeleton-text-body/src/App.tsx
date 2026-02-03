import { Skeleton, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="5" style={{ width: "300px" }}>
      <Skeleton.Text />
      <Skeleton.Text rows={5} />
    </Flex>
  );
}

export default App;
