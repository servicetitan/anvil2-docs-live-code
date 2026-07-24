import { ChatHistory } from "@servicetitan/carto-react-kit";
import type { ChatHistoryItem } from "@servicetitan/carto-react-kit";

const items: ChatHistoryItem[] = [
  { id: "q3", label: "Q3 planning notes", subtitle: "35 mins" },
  {
    id: "invoice",
    label: "Invoice discrepancy follow-up",
    subtitle: "2 hours",
  },
  { id: "customer", label: "Customer churn analysis", subtitle: "Yesterday" },
];

function App() {
  return (
    <div
      style={{
        width: 240,
        height: 420,
        background: "var(--carto-color-background-surface, #f5f5f5)",
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <ChatHistory items={items} defaultSelectedKeys={["q3"]} />
    </div>
  );
}

export default App;
