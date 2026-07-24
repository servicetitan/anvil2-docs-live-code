import { GuidanceCard } from "@servicetitan/carto-react-kit";

const sections = [
  {
    type: "single" as const,
    changes: [
      { id: "labor-hours", label: "Labor hours", from: "6.5h", to: "8.0h" },
    ],
  },
];

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        width: 530,
      }}
    >
      {/* Default — interactive review */}
      <GuidanceCard
        referenceLabel="Estimate #12345"
        changeSections={sections}
      />

      {/* Accepted — collapsed summary */}
      <GuidanceCard
        state="accepted"
        referenceLabel="Invoice #1234"
        changeSections={sections}
        appliedChangeIds={["labor-hours"]}
      />

      {/* Rejected — collapsed summary */}
      <GuidanceCard
        state="rejected"
        referenceLabel="Invoice #1234"
        changeSections={sections}
      />

      {/* Skipped — collapsed summary */}
      <GuidanceCard
        state="skipped"
        referenceLabel="Invoice #1234"
        changeSections={sections}
      />
    </div>
  );
}

export default App;
