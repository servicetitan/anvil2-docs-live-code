import { Checkbox, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="2">
      <Checkbox label="I Agree To The Terms of Service." />
      <Checkbox label="Use the technician’s home business unit by default." />
      <Checkbox label="Disable changes" />
    </Flex>
  );
}

export default App;
