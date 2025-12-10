import { TextField, Flex, Button } from "@servicetitan/anvil2";

function App() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(
          ((e.target as HTMLFormElement)[0] as HTMLInputElement).value,
        );
      }}
    >
      <Flex direction="column" gap={4}>
        <TextField
          name="example-text-field"
          label="Example text field"
          hint="Fill this out, press submit, and look in the console."
        />
        <Button type="submit" appearance="primary">
          Submit
        </Button>
      </Flex>
    </form>
  );
}

export default App;
