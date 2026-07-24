import { Markdown } from "@servicetitan/carto-react-kit";

const source = [
  "Inline `code` sits between words.",
  "",
  "```ts",
  "function greet(name: string) {",
  "  return `Hello, ${name}!`;",
  "}",
  "```",
].join("\n");

function App() {
  return (
    <div style={{ maxWidth: "44rem" }}>
      <Markdown source={source} />
    </div>
  );
}

export default App;
