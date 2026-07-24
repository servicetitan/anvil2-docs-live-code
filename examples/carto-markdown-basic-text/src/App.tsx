import { Markdown } from "@servicetitan/carto-react-kit";

const source = [
  "Plain paragraph text.",
  "",
  "**Bold text** emphasizes a word or phrase.",
  "",
  "*Italicized text* adds a lighter emphasis.",
  "",
  "~~Strikethrough text~~ marks something as removed or done.",
].join("\n");

function App() {
  return (
    <div style={{ maxWidth: "44rem" }}>
      <Markdown source={source} />
    </div>
  );
}

export default App;
