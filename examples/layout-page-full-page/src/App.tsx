import { Flex, Layout, Page, Text } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Page style={{ margin: "-1.5rem" }}>
        <Page.Sidebar>
          <Page.SidebarHeader>
            <Text variant="headline" el="h2">
              Sidebar
            </Text>
          </Page.SidebarHeader>
        </Page.Sidebar>
        <Page.Content>
          <Layout variant="narrow">
            <Layout.Item span={12}>
              <Flex direction="column" gap="2">
                <Text variant="headline" el="h2">
                  Layout
                </Text>
                <Text>
                  Place page sections directly in a Layout Item, separated by
                  headings and spacing.
                </Text>
              </Flex>
            </Layout.Item>
          </Layout>
        </Page.Content>
      </Page>
    </div>
  );
}

export default App;
