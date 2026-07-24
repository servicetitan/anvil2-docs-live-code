import { Markdown } from "@servicetitan/carto-react-kit";

const source =
  "A paragraph with **bold**, *emphasis*, `inline code`, and a [link](https://example.com).";

function App() {
  return (
    <div style={{ maxWidth: "44rem" }}>
      <Markdown source={source} />
    </div>
  );
}

export default App;
