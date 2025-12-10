import { Layout, Card } from "@servicetitan/anvil2";

function App() {
  return (
    <Layout variant="narrow">
      {[...new Array(4)].map((_, i) => (
        <Layout.Item key={i} span={2}>
          <Card background="strong" style={{ width: "100%" }} />
        </Layout.Item>
      ))}
    </Layout>
  );
}

export default App;
