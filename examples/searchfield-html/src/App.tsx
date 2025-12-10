import { SearchField, Flex, Button, Divider, Text } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [submittedValue, setSubmittedValue] =
    useState<FormDataEntryValue | null>("");

  return (
    <Flex direction="column" gap="6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          setSubmittedValue(formData.get("something"));
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

      <Divider />

      <Flex direction="column" gap="2">
        <Text>Current value: {JSON.stringify(value, null, 2)}</Text>
        <Text>Submitted value: {JSON.stringify(submittedValue, null, 2)}</Text>
      </Flex>
    </Flex>
  );
}

export default App;
