import { Chip, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="6">
      <div>
        <Chip
          label="Ben Ho"
          onClose={() => alert("chip close")}
          color="#3e3e5f"
          avatar="https://anvil.servicetitan.com/dog-01.png"
          textWrap
        />
      </div>

      <div style={{ width: "10rem" }}>
        <Chip
          label="Patrick Buckingham"
          onClose={() => alert("chip close")}
          color="#3e3e5f"
          avatar="https://anvil.servicetitan.com/dog-02.png"
          textWrap
        />
      </div>
    </Flex>
  );
}

export default App;
