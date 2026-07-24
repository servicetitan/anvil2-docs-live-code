import { ActionLog } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <ActionLog
      steps={[
        {
          id: "success",
          title: "Looked up the customer account",
          status: "success",
        },
        {
          id: "in-progress",
          title: "Drafting the follow-up summary",
          status: "in-progress",
        },
        {
          id: "not-started",
          title: "Send the summary to the customer",
          status: "not-started",
        },
        {
          id: "error",
          title: "Charge the saved card",
          status: "error",
        },
      ]}
    />
  );
}

export default App;
