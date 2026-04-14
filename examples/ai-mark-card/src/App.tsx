import { Card, List, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <Card flexDirection="column" style={{ maxWidth: "500px" }}>
      <Text variant="headline" el="h2" aiMark>
        Daily Job Summary
      </Text>
      <Text>
        You have four jobs on the board for the next two days: two drain
        cleanouts (Oak St., Riverside Ave.), a water-heater diagnostic on Maple,
        and a leak under a kitchen sink on Cedar.
      </Text>
      <br />
      <Text variant="headline" el="h3" size="small">
        High Priority Jobs
      </Text>
      <List>
        <List.Item>Drain Cleanout (Oak St.)</List.Item>
        <List.Item>Leak Under a Kitchen Sink (Cedar)</List.Item>
      </List>
    </Card>
  );
}

export default App;
