import { Divider } from "@servicetitan/anvil2";

function App() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Divider spacing="2" alignContent="start">
          Start
        </Divider>
        <Divider spacing="2" alignContent="center">
          Center
        </Divider>
        <Divider spacing="2" alignContent="end">
          End
        </Divider>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "10rem",
          justifyContent: "space-between",
        }}
      >
        <Divider spacing="2" vertical alignContent="start">
          Start
        </Divider>
        <Divider spacing="2" vertical alignContent="center">
          Center
        </Divider>
        <Divider spacing="2" vertical alignContent="end">
          End
        </Divider>
      </div>
    </div>
  );
}

export default App;
