import { Chip, Flex } from "@servicetitan/anvil2";
import Info from "@servicetitan/anvil2/assets/icons/material/round/info.svg";
import Warning from "@servicetitan/anvil2/assets/icons/material/round/warning.svg";

function App() {
  return (
    <Flex gap="6">
      <div>
        <Chip
          label="Ben Ho"
          onClose={() => alert("chip close")}
          color="#3e3e5f"
          icon={Info}
          textWrap
        />
      </div>

      <div style={{ width: "10rem" }}>
        <Chip
          label="Patrick Buckingham"
          onClose={() => alert("chip close")}
          color="#3e3e5f"
          icon={Warning}
          textWrap
        />
      </div>
    </Flex>
  );
}

export default App;
