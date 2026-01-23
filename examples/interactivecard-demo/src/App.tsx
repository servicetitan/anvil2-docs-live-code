import { Text } from "@servicetitan/anvil2";
import { InteractiveCard } from "@servicetitan/anvil2/beta";

function App() {
  return (
    <InteractiveCard
      wrapperProps={{ "aria-label": "Interactive Card Demo" }}
      actionProps={{
        "aria-label": "Navigate to ServiceTitan",
        href: "https://servicetitan.com",
        target: "_blank",
        rel: "noopener noreferrer",
      }}
      contentProps={{ padding: "large", flexDirection: "column", gap: "2" }}
    >
      <Text variant="headline" el="h2" size="medium">
        Basic Interactive Card
      </Text>
      <Text>Basic text content in an interactive card.</Text>
    </InteractiveCard>
  );
}

export default App;
