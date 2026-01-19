import { Divider, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <div
      style={{
        display: "grid",
        margin: 24,
      }}
    >
      <Text variant="headline" size="medium" el="h3">
        Headline text
      </Text>
      <Text variant="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Divider spacing="3" />
      <Text variant="headline" size="medium" el="h3">
        Headline text
      </Text>
      <Text variant="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
      <Divider spacing="3" />
      <Text variant="headline" size="medium" el="h3">
        Headline text
      </Text>
      <Text variant="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </div>
  );
}

export default App;
