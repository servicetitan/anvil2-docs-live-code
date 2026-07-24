import { Markdown } from "@servicetitan/carto-react-kit";

const source = [
  "# Page title",
  "",
  "A paragraph with **bold**, *emphasis*, and a [link](https://example.com).",
  "",
  "Inline `code` sits between words.",
].join("\n");

function App() {
  return (
    <div style={{ maxWidth: "44rem" }}>
      <Markdown source={source} />
    </div>
  );
}

export default App;
