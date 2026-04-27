import { useState } from "react";
import { RichTextEditor } from "@servicetitan/anvil2/beta";

const INITIAL_CONTENT = [
  "<h2>Project Update</h2>",
  "<p>Here's a summary of this week's progress across the team.</p>",
  "<h3>Completed</h3>",
  "<ul>",
  "<li>Finalized API contract with the backend team</li>",
  "<li>Implemented <strong>core editor</strong> functionality</li>",
  "<li>Added <em>mention support</em> for team members</li>",
  "</ul>",
  "<h3>In Progress</h3>",
  '<ul data-type="taskList">',
  '<li data-type="taskItem" data-checked="true"><label><input type="checkbox" checked /></label><div>Media embed (image + YouTube)</div></li>',
  '<li data-type="taskItem" data-checked="false"><label><input type="checkbox" /></label><div>Documentation pages</div></li>',
  '<li data-type="taskItem" data-checked="false"><label><input type="checkbox" /></label><div>Accessibility audit</div></li>',
  "</ul>",
  "<h3>Notes</h3>",
  "<blockquote>Always test in Shadow DOM environments before shipping.</blockquote>",
  "<p>Use <code>getHTML()</code> to serialize content for storage.</p>",
].join("");

const ALL_USERS = [
  { id: "1", label: "Alice Johnson" },
  { id: "2", label: "Bob Smith" },
  { id: "3", label: "Carol White" },
  { id: "4", label: "David Brown" },
];

function App() {
  const [mentionOptions, setMentionOptions] = useState(ALL_USERS);

  return (
    <RichTextEditor
      label="Project notes"
      defaultValue={INITIAL_CONTENT}
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
      mentionOptions={mentionOptions}
      onMentionInputChange={(query) =>
        setMentionOptions(
          ALL_USERS.filter((u) =>
            u.label.toLowerCase().includes(query.toLowerCase()),
          ),
        )
      }
      onImageUpload={(files, onComplete) =>
        onComplete(files.map((f) => URL.createObjectURL(f)))
      }
    />
  );
}

export default App;
