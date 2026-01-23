import {
  TextField,
  DateFieldSingle,
  Flex,
  Divider,
} from "@servicetitan/anvil2";

function App() {
  return (
    <Flex direction="column" gap="6">
      <TextField
        label="TextField Label"
        placeholder="Placeholder"
        hint="Hint text"
        description="TextField already has this built in!"
      />

      <Divider />

      <DateFieldSingle
        defaultValue={new Date().toISOString()}
        label="DateField Label"
        description="DateField has this built in too!"
        error="Please enter a valid date."
      />
    </Flex>
  );
}

export default App;
