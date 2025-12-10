import { Layout, Page, Card, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ width: "100vw" }}>
      <Page style={{ height: "15rem", margin: "-1.5rem" }}>
        <Page.Sidebar style={{ height: "15rem" }}>
          <Page.SidebarHeader>
            <Text variant="headline" el="h2">
              Sidebar
            </Text>
          </Page.SidebarHeader>
        </Page.Sidebar>
        <Page.Content style={{ height: "15rem" }}>
          <Layout variant="narrow">
            <Layout.Item span={12}>
              <Card
                background="strong"
                justifyContent="center"
                alignItems="center"
                style={{ width: "100%", height: "12rem" }}
              >
                <Text variant="headline" el="h2">
                  Layout
                </Text>
              </Card>
            </Layout.Item>
          </Layout>
        </Page.Content>
      </Page>
    </div>
  );
}

export default App;
