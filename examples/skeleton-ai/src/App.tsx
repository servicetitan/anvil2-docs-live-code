import { Skeleton, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="5" style={{ width: "300px" }}>
      <Flex direction="row" gap="3" alignItems="center">
        <Skeleton.Circle ai diameter="2.5rem" />
        <Flex direction="column" gap="2" grow={1}>
          <Skeleton.Text ai variant="headline" />
          <Skeleton.Pill ai width="4rem" />
        </Flex>
      </Flex>
      <Skeleton.Text ai rows={3} />
      <Skeleton.Rectangle ai height="6rem" />
    </Flex>
  );
}

export default App;
