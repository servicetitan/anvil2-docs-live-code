import { Tab, Text, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <div style={{ minWidth: "23rem", padding: 24 }}>
      <Tab defaultIndex={0}>
        <Tab.Panel id="p1">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text variant="headline" el="h1" style={{ marginBottom: 0 }}>
              Page title A
            </Text>
            <Button appearance="primary">Create</Button>
          </div>
        </Tab.Panel>
        <Tab.Panel id="p2">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text variant="headline" el="h1" style={{ marginBottom: 0 }}>
              Page title B
            </Text>
            <Button appearance="primary">Edit</Button>
          </div>
        </Tab.Panel>
        <Tab.Panel id="p3">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text variant="headline" el="h1" style={{ marginBottom: 0 }}>
              Page title C
            </Text>
            <Button appearance="danger">Delete</Button>
          </div>
        </Tab.Panel>
        <Tab.List>
          <Tab.Button id="t1" controls="p1" onClick={console.log}>
            Tab A
          </Tab.Button>
          <Tab.Button id="t2" controls="p2" onClick={console.log}>
            Tab B
          </Tab.Button>
          <Tab.Button id="t3" controls="p3" onClick={console.log}>
            Tab C
          </Tab.Button>
        </Tab.List>
        <Tab.Panel id="p1">Scope of Tab A</Tab.Panel>
        <Tab.Panel id="p2">Scope of Tab B</Tab.Panel>
        <Tab.Panel id="p3">Scope of Tab C</Tab.Panel>
      </Tab>
    </div>
  );
}

export default App;
