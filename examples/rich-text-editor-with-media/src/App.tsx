import { RichTextEditor } from "@servicetitan/anvil2/beta";

function App() {
  return (
    <RichTextEditor
      label="Article"
      placeholder="Start writing. Use the Insert button to add images or YouTube videos."
      allowMedia
      allowTextAlignment
      onImageUpload={(files, onComplete) =>
        onComplete(files.map((f) => URL.createObjectURL(f)))
      }
      allowedMimeTypes={["image/jpeg", "image/png", "image/gif", "image/webp"]}
    />
  );
}

export default App;
