import { Layout, Card } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ width: "calc(100vw - 4rem)" }}>
      <Layout variant="narrow">
        {[...new Array(4)].map((_, i) => (
          <Layout.Item key={i} span={2}>
            <Card background="strong" style={{ width: "100%" }} />
          </Layout.Item>
        ))}
      </Layout>
    </div>
  );
}

export default App;
