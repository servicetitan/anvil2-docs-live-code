import { Chip, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap={8}>
      <Flex gap={2} style={{ flexWrap: "wrap" }}>
        <Chip label="Chip" size="medium" />
        <Chip label="Longer Chip name" size="medium" />
        <Chip label="Another Chip name" size="medium" />
        <Chip label="One more to show wrapping " size="medium" />
      </Flex>

      <Flex gap={2} style={{ flexWrap: "wrap" }}>
        <Chip label="Chip" size="medium" />
        <Chip
          label="This is an exceptionally long Chip in the middle that could potentially break the whole layout"
          size="medium"
          textWrap
        />
        <Chip label="Another Chip name" size="medium" />
        <Chip label="One more to show wrapping " size="medium" />
      </Flex>
    </Flex>
  );
}

export default App;
