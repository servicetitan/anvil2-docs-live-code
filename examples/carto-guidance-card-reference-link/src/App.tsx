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
      {/* Plain text reference */}
      <GuidanceCard
        referenceLabel="Estimate #12345"
        changeSections={sections}
      />

      {/* Linked reference — opens in a new tab */}
      <GuidanceCard
        referenceLabel="Estimate #12345"
        referenceHref="https://example.com/estimates/12345"
        changeSections={sections}
      />
    </div>
  );
}

export default App;
