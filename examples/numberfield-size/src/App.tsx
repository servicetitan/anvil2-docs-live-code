import { NumberField, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="3">
      <NumberField defaultValue={0} size="small" />
      <NumberField defaultValue={0} size="medium" />
      <NumberField defaultValue={0} size="large" />
    </Flex>
  );
}

export default App;
