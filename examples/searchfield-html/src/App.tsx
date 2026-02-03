import { SearchField, Flex, Button } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <Flex direction="column" gap="6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          console.log(formData.get("something"));
        }}
      >
        <Flex direction="row" gap="6">
          <SearchField
            name="something"
            placeholder="Search for something..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onClear={() => setValue("")}
          />

          <Button type="submit">Submit</Button>
        </Flex>
      </form>
    </Flex>
  );
}

export default App;
