import { ActionLog } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <ActionLog
      steps={[
        {
          id: "a",
          title: "Looked up the customer account",
          status: "success",
          description: "Retrieved account details and recent payment history.",
        },
        {
          id: "b",
          title: "Pulled the last 20 invoices",
          status: "success",
          description: "Found 3 overdue invoices totaling $1,240.",
        },
        {
          id: "c",
          title: "Drafting the follow-up summary",
          status: "in-progress",
          description: "Summarizing overdue balances and payment history.",
        },
      ]}
    />
  );
}

export default App;
