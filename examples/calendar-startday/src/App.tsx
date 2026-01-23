import { Calendar, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="row" gap="4" alignItems="start">
      <Flex direction="column" gap="2" alignItems="center">
        <Text size="large">
          <strong>Sunday Start (Default)</strong>
        </Text>
        <Calendar defaultValue="2024-06-15" startDay="Sunday" />
      </Flex>
      <Flex direction="column" gap="2" alignItems="center">
        <Text size="large">
          <strong>Monday Start</strong>
        </Text>
        <Calendar defaultValue="2024-06-15" startDay="Monday" />
      </Flex>
    </Flex>
  );
}

export default App;
