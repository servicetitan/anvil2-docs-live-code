import { AgentMediaCard } from "@servicetitan/anvil2-ai-kit";

function App() {
  return (
    <div style={{ maxWidth: 520 }}>
      <AgentMediaCard
        media={{
          kind: "document",
          fileName: "Quarterly report.pdf",
          fileTypeLabel: "PDF",
          href: "https://example.com/report.pdf",
        }}
      />
    </div>
  );
}

export default App;
