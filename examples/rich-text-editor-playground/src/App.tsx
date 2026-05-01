import { useState } from "react";
import { Details, Flex } from "@servicetitan/anvil2";
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
    <Flex direction="column" gap={4}>
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
        <Details>
          <Details.Summary>HTML output</Details.Summary>
          <Details.Content>
            <pre
              style={{
                fontSize: 11,
                padding: 8,
                borderRadius: 4,
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                wordBreak: "break-all",
              }}
            >
              {html}
            </pre>
          </Details.Content>
        </Details>
      )}
    </Flex>
  );
}

export default App;
