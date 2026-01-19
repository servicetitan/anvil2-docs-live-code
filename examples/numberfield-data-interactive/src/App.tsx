import { NumberField, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="3">
      <NumberField defaultValue={0} />
      <NumberField defaultValue={0} readOnly />
      <NumberField defaultValue={0} error />
      <NumberField defaultValue={0} loading />
    </Flex>
  );
}

export default App;
