import { Textarea, Flex } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="6">
      <Textarea label="Label" defaultValue="Height set to 1 row" rows={1} />
      <Textarea
        label="Label"
        defaultValue={"Height set to" + "\n" + "3" + "\n" + "rows of text"}
        rows={3}
      />
    </Flex>
  );
}

export default App;
