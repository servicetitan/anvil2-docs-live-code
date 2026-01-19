import { Tab, Flex, Alert } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={2}>
      <Alert
        title="Error Alert scoped above the Tab"
        status="danger"
        onClose={console.log}
      >
        Place an Alert above the Tabs when its scope is across Tabs.
      </Alert>
      <Tab defaultIndex={0}>
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
    </Flex>
  );
}

export default App;
