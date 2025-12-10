import { TextField, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(value);
      }}
    >
      <Flex direction="column" gap={4}>
        <TextField
          name="example-text-field"
          label="Example text field"
          hint="Fill this out, press submit, and look in the console."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit" appearance="primary">
          Submit
        </Button>
      </Flex>
    </form>
  );
}

export default App;
