import { Calendar, Flex, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="row" gap="6" alignItems="start">
      <Flex direction="column" gap="2" alignItems="center">
        <Text size="large">
          <strong>Single Date Selection</strong>
        </Text>
        <Calendar defaultValue="2024-06-15" />
      </Flex>
      <Flex direction="column" gap="2" alignItems="center">
        <Text size="large">
          <strong>Date Range Selection</strong>
        </Text>
        <Calendar
          range
          defaultValue={{
            start: "2024-06-15",
            end: "2024-06-20",
          }}
        />
      </Flex>
    </Flex>
  );
}

export default App;
