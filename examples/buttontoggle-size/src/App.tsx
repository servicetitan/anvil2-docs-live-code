import { ButtonToggle, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="3">
      <ButtonToggle size="large">Large</ButtonToggle>
      <ButtonToggle size="medium">Medium(Default)</ButtonToggle>
      <ButtonToggle size="small">Small</ButtonToggle>
    </Flex>
  );
}

export default App;
