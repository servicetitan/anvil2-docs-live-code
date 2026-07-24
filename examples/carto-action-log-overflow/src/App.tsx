import { ActionLog } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ maxWidth: "20rem" }}>
      <ActionLog
        steps={[
          {
            id: "a",
            title:
              "Reconciled every line item on Invoice #37482915 against the signed service agreement",
            status: "success",
            description:
              "Compared parts, labor, and adjuster notes line by line, then flagged three entries that didn't match the agreed scope of work for a human to review.",
          },
        ]}
      />
    </div>
  );
}

export default App;
