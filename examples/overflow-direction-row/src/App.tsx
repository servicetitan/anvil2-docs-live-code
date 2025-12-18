import { Overflow, Card, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ maxWidth: "calc(100vw - 4rem)" }}>
      <Overflow direction="row" gap="4">
        {[
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        ].map((i) => (
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
    </div>
  );
}

export default App;
