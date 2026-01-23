import { Tab, Alert } from "@servicetitan/anvil2";

function App() {
  return (
    <>
      <Tab defaultIndex={0} style={{ minWidth: "55rem" }}>
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
        <Tab.Panel id="p1">
          <Alert
            title="Error Alert scoped to the Tab"
            status="danger"
            onClose={console.log}
          >
            Place an Alert below the Tab when its scope is limited to just this
            Tab content.
          </Alert>
        </Tab.Panel>
        <Tab.Panel id="p2">Scope of Tab B</Tab.Panel>
        <Tab.Panel id="p3">Scope of Tab C</Tab.Panel>
      </Tab>
    </>
  );
}

export default App;
