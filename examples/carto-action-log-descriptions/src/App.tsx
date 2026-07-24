import { ActionLog } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <ActionLog
      steps={[
        {
          id: "a",
          title: "Pulled the last 20 invoices",
          status: "success",
          description: "Found 3 overdue invoices totaling $1,240.",
        },
        {
          id: "b",
          title: "Drafting the follow-up summary",
          status: "in-progress",
          description:
            "Summarizing overdue balances and recent payment history.",
        },
        {
          id: "c",
          title: "Couldn't reach the billing service",
          status: "error",
          description: "Timed out after 30s; the run was halted.",
        },
      ]}
    />
  );
}

export default App;
