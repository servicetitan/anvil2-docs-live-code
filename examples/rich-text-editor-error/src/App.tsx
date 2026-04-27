import { useState } from "react";
import { RichTextEditor } from "@servicetitan/anvil2/beta";

function App() {
  const [html, setHtml] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isEmpty = !html || html === "<p></p>";
  const showError = submitted && isEmpty;

  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <RichTextEditor
        label="Description"
        required
        placeholder="Start writing..."
        value={html}
        onChange={setHtml}
        error={showError ? "Description is required." : undefined}
      />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
