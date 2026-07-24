import { ActionLog } from "@servicetitan/carto-react-kit";

const steps = [
  {
    id: "a",
    title: "Looked up the customer account",
    status: "success" as const,
    description: "Retrieved account details and recent payment history.",
  },
  {
    id: "b",
    title: "Pulled the last 20 invoices",
    status: "success" as const,
    description: "Found 3 overdue invoices totaling $1,240.",
  },
  {
    id: "c",
    title: "Drafting the follow-up summary",
    status: "in-progress" as const,
    description: "Summarizing overdue balances and payment history.",
  },
];

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: 80,
        alignItems: "flex-start",
        padding: "24px 0",
      }}
    >
      {/* Collapsed */}
      <div style={{ minWidth: 280 }}>
        <ActionLog defaultExpanded={false} steps={steps} />
      </div>

      {/* Expanded (default) */}
      <div style={{ minWidth: 280 }}>
        <ActionLog steps={steps} />
      </div>
    </div>
  );
}

export default App;
