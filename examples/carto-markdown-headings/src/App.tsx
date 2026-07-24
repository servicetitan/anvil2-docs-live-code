import { Markdown } from "@servicetitan/carto-react-kit";

const source = [
  "# Heading 1",
  "## Heading 2",
  "### Heading 3",
  "#### Heading 4",
].join("\n");

function App() {
  return (
    <div style={{ maxWidth: "44rem" }}>
      <Markdown source={source} />
    </div>
  );
}

export default App;
