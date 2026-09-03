import { UserMediaMessage } from "@servicetitan/anvil2-ai-kit";

function App() {
  return (
    <UserMediaMessage
      media={{
        kind: "document",
        fileName: "Estimate.pdf",
        fileTypeLabel: "PDF",
        href: "https://example.com/estimate.pdf",
      }}
      timestamp={new Date(2026, 3, 1, 16, 40)}
    />
  );
}

export default App;
