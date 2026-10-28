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
    />
  );
}

export default App;
