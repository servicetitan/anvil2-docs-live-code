import { Checkbox, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="2">
      <Checkbox label="I agree to the terms of service" />
      <Checkbox label="Use the technician’s home business unit by default" />
      <Checkbox label="Allow changes" />
    </Flex>
  );
}

export default App;
