import { Chip, Flex } from "@servicetitan/anvil2";
import dog01 from "../assets/dog-01.png";
import dog02 from "../assets/dog-02.png";

function App() {
  return (
    <Flex gap="6">
      <div>
        <Chip
          label="Ben Ho"
          onClose={() => alert("chip close")}
          color="#3e3e5f"
          avatar={dog01}
          textWrap
        />
      </div>

      <div style={{ width: "10rem" }}>
        <Chip
          label="Patrick Buckingham"
          onClose={() => alert("chip close")}
          color="#3e3e5f"
          avatar={dog02}
          textWrap
        />
      </div>
    </Flex>
  );
}

export default App;
