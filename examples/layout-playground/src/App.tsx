import { Layout, Card } from "@servicetitan/anvil2";

function App() {
  const cardProps = {
    background: "stronger" as const,
    style: { width: "100%" },
  };
  const createArray = (number: number) => [...new Array(number)];

  return (
    <Layout variant="narrow">
      <Layout.Item span={12}>
        <Card {...cardProps}>span=12</Card>
      </Layout.Item>
      {createArray(2).map((_, i) => (
        <Layout.Item key={i} span={6}>
          <Card {...cardProps}>span=6</Card>
        </Layout.Item>
      ))}
      {createArray(3).map((_, i) => (
        <Layout.Item key={i} span={4}>
          <Card {...cardProps}>span=4</Card>
        </Layout.Item>
      ))}
      {createArray(4).map((_, i) => (
        <Layout.Item key={i} span={3}>
          <Card {...cardProps}>span=3</Card>
        </Layout.Item>
      ))}
      {createArray(6).map((_, i) => (
        <Layout.Item key={i} span={2}>
          <Card {...cardProps}>span=2</Card>
        </Layout.Item>
      ))}
      {createArray(12).map((_, i) => (
        <Layout.Item key={i} span={1}>
          <Card justifyContent="center" {...cardProps}>
            1
          </Card>
        </Layout.Item>
      ))}
    </Layout>
  );
}

export default App;
