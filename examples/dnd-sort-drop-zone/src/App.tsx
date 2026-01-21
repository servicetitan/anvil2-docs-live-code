import { Flex, Dnd } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap={4}>
      <Dnd.Zone style={{ width: "25%" }} className="p-3">
        Resting Drop Zone
      </Dnd.Zone>
      <Dnd.Zone isDragging style={{ width: "25%" }} className="p-3">
        Visible Drop Zone while dragging
      </Dnd.Zone>
      <Dnd.Zone
        isDragging
        isOver
        isValid
        style={{ width: "25%" }}
        className="p-3"
      >
        Valid Drop Zone, user is over the Drop Zone
      </Dnd.Zone>
      <Dnd.Zone isDragging isOver style={{ width: "25%" }} className="p-3">
        Invalid drop zone, user is over the Drop Zone
      </Dnd.Zone>
    </Flex>
  );
}

export default App;
