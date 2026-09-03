import { Markdown } from "@servicetitan/anvil2-ai-kit";

const source = [
  "| Language | Typing | Use Case |",
  "| -------- | ------ | -------- |",
  "| TypeScript | Static (Strong) | Web / Scalable Apps |",
  "| Python | Dynamic | AI / Data Science |",
  "| Rust | Static (Safe) | Systems / WebAssembly |",
].join("\n");

function App() {
  return (
    <div style={{ maxWidth: "44rem" }}>
      <Markdown source={source} />
    </div>
  );
}

export default App;
