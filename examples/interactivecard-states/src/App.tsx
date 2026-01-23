import { Flex, Text } from "@servicetitan/anvil2";
import { InteractiveCard } from "@servicetitan/anvil2/beta";

function App() {
  return (
    <Flex gap="4">
      <InteractiveCard
        wrapperProps={{ "aria-label": "Hover state card" }}
        actionProps={{
          "aria-label": "View hover example",
          onClick: () => {},
        }}
        contentProps={{ padding: "large", flexDirection: "column", gap: "2" }}
        data-interactive="hover"
      >
        <Text>Hover state</Text>
      </InteractiveCard>

      <InteractiveCard
        wrapperProps={{ "aria-label": "Focus state card" }}
        actionProps={{
          "aria-label": "View focus example",
          onClick: () => {},
        }}
        contentProps={{ padding: "large", flexDirection: "column", gap: "2" }}
        data-interactive="focus-visible"
      >
        <Text>Focus state</Text>
      </InteractiveCard>

      <InteractiveCard
        wrapperProps={{ "aria-label": "Disabled state card" }}
        actionProps={{
          "aria-label": "View disabled example",
          onClick: () => {},
          disabled: true,
        }}
        contentProps={{ padding: "large", flexDirection: "column", gap: "2" }}
      >
        <Text>Disabled state</Text>
      </InteractiveCard>
    </Flex>
  );
}

export default App;
