import { Markdown } from "@servicetitan/carto-react-kit";

const source = [
  "> A blockquote sets quoted text apart from the surrounding prose.",
  "",
  "---",
  "",
  "A horizontal rule separates unrelated sections of content.",
].join("\n");

function App() {
  return (
    <div style={{ maxWidth: "44rem" }}>
      <Markdown source={source} />
    </div>
  );
}

export default App;
