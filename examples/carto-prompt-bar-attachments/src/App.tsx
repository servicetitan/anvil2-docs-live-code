import { useState } from "react";
import { PromptBar } from "@servicetitan/carto-react-kit";

function App() {
  const [value, setValue] = useState("");
  const [attachments, setAttachments] = useState([
    { id: "1", name: "invoice.pdf" },
    { id: "2", name: "site-photo.jpg" },
  ]);

  return (
    <PromptBar
      value={value}
      onChange={setValue}
      attachments={attachments}
      onAddAttachment={() => {}}
      onRemoveAttachment={(id) =>
        setAttachments((current) =>
          current.filter((attachment) => attachment.id !== id),
        )
      }
    />
  );
}

export default App;
