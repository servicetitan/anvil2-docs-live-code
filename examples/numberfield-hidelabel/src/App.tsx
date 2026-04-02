import { Flex, NumberField } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex
      direction="row"
      gap="2"
      alignItems="flex-end"
      style={{ maxWidth: 400 }}
    >
      <NumberField label="Quantity" hideLabel suffix="qty" />
      <NumberField label="Unit price" hideLabel prefix="$" />
    </Flex>
  );
}

export default App;
