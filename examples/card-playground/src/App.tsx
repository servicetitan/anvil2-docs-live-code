import { Card, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Card flexDirection="column" background="strong">
      <Text variant="headline" el="h2" size="large">
        Basic Card
      </Text>
      <Text>
        This is the text within this example card. Make sure to always add{" "}
        <code>flexDirection=&quot;column&quot;</code> to the <code>Card</code>{" "}
        to make the text stack vertically.
      </Text>
    </Card>
  );
}

export default App;
