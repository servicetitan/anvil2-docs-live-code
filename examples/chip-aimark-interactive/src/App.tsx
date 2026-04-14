import { Chip, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex gap="4" alignItems="center" wrap="wrap">
      <Chip
        label="AI estimate draft"
        aiMark
        onClick={() => alert("chip click")}
      />
      <Chip
        label="AI estimate draft"
        aiMark
        onClose={() => alert("chip close")}
      />
      <Chip
        label="AI estimate draft"
        aiMark
        color="#3e3e5f"
        onClick={() => alert("chip click")}
        onClose={() => alert("chip close")}
      />
    </Flex>
  );
}

export default App;
