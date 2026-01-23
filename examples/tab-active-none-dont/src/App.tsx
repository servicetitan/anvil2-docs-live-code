import { Tab } from "@servicetitan/anvil2";

function App() {
  return (
    <Tab.List style={{ minWidth: "55rem" }}>
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
  );
}

export default App;
