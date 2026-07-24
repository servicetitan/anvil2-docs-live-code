import { GuidanceCard } from "@servicetitan/carto-react-kit";

const changes = [
  { id: "labor-hours", label: "Labor hours", from: "6.5h", to: "8.0h" },
  { id: "labor-rate", label: "Labor rate", from: "$95/hr", to: "$110/hr" },
];
const sections = [{ type: "single" as const, changes }];

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        width: 530,
      }}
    >
      {/* Default — every change starts selected; Accept and Edit are enabled */}
      <GuidanceCard
        referenceLabel="Estimate #12345"
        changeSections={sections}
      />

      {/* Everything deselected — Accept and Edit become disabled */}
      <GuidanceCard
        referenceLabel="Estimate #12345"
        changeSections={sections}
      />
    </div>
  );
}

export default App;
