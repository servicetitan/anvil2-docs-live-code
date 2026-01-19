import { Tab } from "@servicetitan/anvil2";

function App() {
  return (
    <Tab defaultIndex={0}>
      <Tab.List>
        <Tab.Button id="t5" controls="p1" onClick={console.log}>
          Tab A
        </Tab.Button>
        <Tab.Button id="t3" controls="p2" onClick={console.log}>
          Tab B
        </Tab.Button>
        <Tab.Button id="t5" controls="p3" onClick={console.log}>
          Tab C
        </Tab.Button>
      </Tab.List>
    </Tab>
  );
}

export default App;
