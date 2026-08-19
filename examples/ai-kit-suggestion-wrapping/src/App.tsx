import { SuggestionList } from "@servicetitan/anvil2-ai-kit";

function App() {
  return (
    <div style={{ maxWidth: "20rem" }}>
      <SuggestionList
        suggestions={[
          "What can you help me with today?",
          "Summarize my most recent job activity",
          "Show me overdue invoices",
        ]}
        onSelect={() => {}}
      />
    </div>
  );
}

export default App;
