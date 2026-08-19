import { Link } from "@servicetitan/anvil2-ai-kit";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* Same-page navigation (default) */}
      <Link text="Go to dashboard" href="/dashboard" />

      {/* Opens in a new tab */}
      <Link
        text="View documentation"
        href="https://example.com"
        target="_blank"
      />
    </div>
  );
}

export default App;
