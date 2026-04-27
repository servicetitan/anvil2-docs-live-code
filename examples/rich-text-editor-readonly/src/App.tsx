import { RichTextEditor } from "@servicetitan/anvil2/beta";

const CONTENT = [
  "<h3>Meeting summary</h3>",
  "<p>Discussed the Q2 roadmap and aligned on priorities for the next sprint.</p>",
  "<ul>",
  "<li><strong>Design:</strong> Finalize component spec by Friday</li>",
  "<li><strong>Engineering:</strong> Begin implementation next Monday</li>",
  "<li><strong>QA:</strong> Prepare test plan in parallel</li>",
  "</ul>",
  "<p>Next sync scheduled for <em>Thursday at 2pm</em>.</p>",
].join("");

function App() {
  return (
    <RichTextEditor label="Meeting notes" defaultValue={CONTENT} disabled />
  );
}

export default App;
