import { Flex, Textarea } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" style={{ maxWidth: 400 }}>
      <Textarea label="**Bold** label" placeholder="Bold" />
      <Textarea label="*Italic* label" placeholder="Italic" />
      <Textarea
        label="***Bold and italic*** label"
        placeholder="Bold and italic"
      />
      <Textarea label="==Highlight== label" placeholder="Highlight" />
      <Textarea label="`Code` label" placeholder="Code" />
    </Flex>
  );
}

export default App;
