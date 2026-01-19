import { Chip, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={6}>
      <Chip
        label="Chip label that will wrap when not enough space isprovided for it."
        size="medium"
      />
      <Chip
        label="Chip label that will wrap when not enough space isprovided for it."
        size="medium"
        onClose={() => alert("chip close")}
      />
    </Flex>
  );
}

export default App;
