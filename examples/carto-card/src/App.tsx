import { Card, Text } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ maxWidth: "20rem" }}>
      <Card
        content={
          <Text text="This is a card surface for grouping related content." />
        }
      />
    </div>
  );
}

export default App;
