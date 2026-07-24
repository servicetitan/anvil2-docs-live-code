import { ActionLog, Text } from "@servicetitan/carto-react-kit";

const detailsContent = (
  <Text
    variant="body"
    size="compact"
    text="Overdue since April · last payment May 3 · $1,240 across 3 invoices."
  />
);

const steps = [
  {
    id: "a",
    title: "Looked up the customer account",
    status: "success" as const,
    description: "Retrieved account details and recent payment history.",
  },
  {
    id: "b",
    title: "Drafting the follow-up summary",
    status: "in-progress" as const,
    description: "Summarizing overdue balances and recent payment history.",
    details: detailsContent,
  },
  {
    id: "c",
    title: "Send the summary to the customer",
    status: "not-started" as const,
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
      {/* Details collapsed */}
      <div style={{ minWidth: 280 }}>
        <ActionLog steps={steps} />
      </div>

      {/* Details open */}
      <div style={{ minWidth: 280 }}>
        <ActionLog steps={steps} />
      </div>
    </div>
  );
}

export default App;
