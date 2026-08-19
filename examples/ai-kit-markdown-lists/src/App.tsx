import { Markdown } from "@servicetitan/anvil2-ai-kit";

const source = [
  "- First item",
  "- Second item",
  "  - Nested item",
  "",
  "1. First step",
  "2. Second step",
  "",
  "- [x] Completed task",
  "- [ ] Open task",
].join("\n");

function App() {
  return (
    <div style={{ maxWidth: "44rem" }}>
      <Markdown source={source} />
    </div>
  );
}

export default App;
