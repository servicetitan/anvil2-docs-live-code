import { Tab } from "@servicetitan/anvil2";

function App() {
  return (
    <Tab defaultIndex={1}>
      <Tab.List>
        <Tab.Button id="t1" controls="p1">
          First
        </Tab.Button>
        <Tab.Button id="t2" controls="p2">
          Second
        </Tab.Button>
      </Tab.List>
      <Tab.Panel id="p1">Content 1</Tab.Panel>
      <Tab.Panel id="p2">Content 2</Tab.Panel>
    </Tab>
  );
}

export default App;
