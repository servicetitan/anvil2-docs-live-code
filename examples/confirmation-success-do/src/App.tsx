import { EditCard, Flex, Text, Alert } from "@servicetitan/anvil2";

function App() {
  return (
    <EditCard flexGrow="1" headerText="Migration" state="complete">
      <Flex direction="column" gap="3">
        <Text variant="eyebrow" size="medium">
          Automatically create driving and working entries when dispatch and
          arrive are pressed.
        </Text>
        <Alert title="Successful Migration" status="success">
          Customer was successfully migrated on 10/12/2025, 09:30 PST
        </Alert>
      </Flex>
    </EditCard>
  );
}

export default App;
