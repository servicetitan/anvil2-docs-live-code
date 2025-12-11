import {
  Page,
  Text,
  SideNav,
  SideNavLink,
  Link,
  Layout,
  Flex,
  Button,
} from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [panelOpen, setPanelOpen] = useState(false);

  const breadcrumbs = [
    { href: "/", children: "Home" },
    { href: "/section", children: "Section" },
    { children: "Current Page" },
  ];

  const chips = [{ label: "Status" }, { label: "Draft" }];

  const actions = {
    primary: {
      label: "Primary Action",
      onClick: () => console.log("Primary clicked"),
    },
    secondary: [
      {
        label: "Secondary Action",
        onClick: () => console.log("Secondary clicked"),
      },
    ],
  };

  return (
    <div style={{ width: "100vw" }}>
      <Page style={{ height: "15rem", overflow: "hidden" }}>
        <Page.Sidebar style={{ height: "15rem" }}>
          <Page.SidebarHeader>
            <Text variant="headline" el="h2">
              Sidebar Title
            </Text>
          </Page.SidebarHeader>
          <SideNav>
            <SideNavLink id="01" href="#" active>
              First Link
            </SideNavLink>
            <SideNavLink id="02" href="#">
              Second Link
            </SideNavLink>
            <SideNavLink id="03" href="#">
              Third Link
            </SideNavLink>
          </SideNav>
        </Page.Sidebar>

        <Page.Header
          title="Page Header"
          breadcrumbs={breadcrumbs}
          chips={chips}
          actions={actions}
          preferenceAction={{
            "aria-label": "Open settings",
            onClick: () => console.log("Settings clicked"),
          }}
          description={
            <Text>
              This demonstrates all header elements with{" "}
              <Text inline>
                <Link href="#" appearance="primary">
                  standard actions
                </Link>
              </Text>
            </Text>
          }
        />

        <Page.Content style={{ height: "15rem" }}>
          <Layout>
            <Layout.Item span={12}>
              <Flex direction="column" gap="2">
                <Text variant="headline" el="h1" size="large">
                  Page Content
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Button onClick={() => setPanelOpen((p) => !p)}>
                  Toggle Panel Open
                </Button>
              </Flex>
            </Layout.Item>
          </Layout>
        </Page.Content>
        <Page.Panel open={panelOpen}>
          <Flex direction="column" gap="2">
            <Text variant="headline" el="h2">
              Page Panel
            </Text>
            <Text>Lorem ipsum dolor sit amet.</Text>
          </Flex>
        </Page.Panel>
      </Page>
    </div>
  );
}

export default App;
