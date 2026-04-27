import { useState } from "react";
import { RichTextEditor } from "@servicetitan/anvil2/beta";

const MENTION_OPTIONS = [
  { id: "1", label: "Alice Johnson" },
  { id: "2", label: "Bob Smith" },
  { id: "3", label: "Carol White" },
  { id: "4", label: "David Brown" },
];

function App() {
  const [html, setHtml] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <RichTextEditor
        label="Description"
        placeholder="Start writing..."
        value={html}
        onChange={setHtml}
        allowTextFormat
        allowTextAlignment
        allowCode
        allowBlockquote
        allowLists
        allowChecklist
        allowLink
        allowMention
        allowDragDrop
        allowMedia
        mentionOptions={MENTION_OPTIONS}
        onImageUpload={(files, onComplete) =>
          onComplete(files.map((f) => URL.createObjectURL(f)))
        }
      />
      {html && (
        <details>
          <summary style={{ cursor: "pointer", fontSize: 12, color: "#666" }}>
            HTML output
          </summary>
          <pre
            style={{
              fontSize: 11,
              background: "#f5f5f5",
              padding: 8,
              borderRadius: 4,
              overflowX: "auto",
              whiteSpace: "pre-wrap",
              wordBreak: "break-all",
            }}
          >
            {html}
          </pre>
        </details>
      )}
    </div>
  );
}

export default App;
