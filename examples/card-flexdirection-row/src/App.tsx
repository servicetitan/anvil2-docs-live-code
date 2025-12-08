import { Card } from "@servicetitan/anvil2";

function App() {
  return (
    <Card flexDirection="row" style={{ height: 100, gap: 8, width: "100%" }}>
      <div
        style={{ flex: 2, background: "var(--background-color-strongest)" }}
      />
      <div
        style={{ flex: 1, background: "var(--background-color-strongest)" }}
      />
    </Card>
  );
}

export default App;
