import { Button, Flex, Text } from "@servicetitan/anvil2";
import { InteractiveCard } from "@servicetitan/anvil2/beta";

function App() {
  return (
    <InteractiveCard
      wrapperProps={{ "aria-label": "Basic Interactive Card" }}
      actionProps={{
        "aria-label": "Select basic interactive card",
        onClick: console.log,
      }}
      contentProps={{ padding: "large", flexDirection: "column", gap: "2" }}
    >
      <Text variant="headline" el="h2" size="medium">
        Basic Interactive Card
      </Text>
      <Text>Basic text content in an interactive card.</Text>
      <Flex gap="2">
        <Button onClick={console.log}>Action </Button>
      </Flex>
    </InteractiveCard>
  );
}

export default App;
