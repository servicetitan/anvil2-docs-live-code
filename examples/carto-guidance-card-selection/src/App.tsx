import { GuidanceCard } from "@servicetitan/carto-react-kit";

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
      {/* Multiple changes — each row gets its own checkbox */}
      <GuidanceCard
        referenceLabel="Estimate #12345"
        changeSections={[
          {
            type: "single",
            changes: [
              {
                id: "labor-hours",
                label: "Labor hours",
                from: "6.5h",
                to: "8.0h",
              },
              {
                id: "labor-rate",
                label: "Labor rate",
                from: "$95/hr",
                to: "$110/hr",
              },
            ],
          },
        ]}
      />

      {/* One change — no checkbox; Accept applies to the sole item */}
      <GuidanceCard
        referenceLabel="Estimate #12345"
        changeSections={[
          {
            type: "single",
            changes: [
              {
                id: "labor-hours",
                label: "Labor hours",
                from: "6.5h",
                to: "8.0h",
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default App;
