import { useState } from "react";
import { Button, Flex } from "@servicetitan/anvil2";
import { RichTextEditor } from "@servicetitan/anvil2/beta";

function App() {
  const [html, setHtml] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isEmpty = !html || html === "<p></p>";
  const showError = submitted && isEmpty;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <Flex direction="column" gap={4}>
        <RichTextEditor
          label="Description"
          required
          placeholder="Start writing..."
          value={html}
          onChange={setHtml}
          error={showError ? "Description is required." : undefined}
        />
        <Flex>
          <Button type="submit" appearance="primary">
            Submit
          </Button>
        </Flex>
      </Flex>
    </form>
  );
}

export default App;
