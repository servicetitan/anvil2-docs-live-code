import { Overflow, Card, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Overflow gap="4" height={200}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
        <Card
          key={i}
          justifyContent="center"
          alignItems="center"
          style={{ minWidth: 100, minHeight: 100 }}
        >
          <Text el="h4" variant="headline" size="xlarge">
            {i + 1}
          </Text>
        </Card>
      ))}
    </Overflow>
  );
}

export default App;
