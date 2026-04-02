import { Flex, TextField } from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="4" style={{ maxWidth: 400 }}>
      <TextField label="**Bold** label" placeholder="Bold" />
      <TextField label="*Italic* label" placeholder="Italic" />
      <TextField
        label="***Bold and italic*** label"
        placeholder="Bold and italic"
      />
      <TextField label="==Highlight== label" placeholder="Highlight" />
      <TextField label="`Code` label" placeholder="Code" />
    </Flex>
  );
}

export default App;
