import { Markdown } from "@servicetitan/carto-react-kit";

const source = [
  "| Invoice | Status |",
  "| ------- | ------ |",
  "| #1024 | Paid |",
  "| #1025 | Overdue |",
].join("\n");

function App() {
  return (
    <div style={{ maxWidth: "44rem" }}>
      <Markdown source={source} />
    </div>
  );
}

export default App;
