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
      {/* Single section — scalar diff rows */}
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

      {/* Table section — labeled line-item table */}
      <GuidanceCard
        referenceLabel="Estimate #12345"
        changeSections={[
          {
            type: "table",
            label: "Line items",
            changeTables: [
              {
                label: "New",
                columns: [
                  { key: "name", header: "Name", minWidth: 160 },
                  {
                    key: "description",
                    header: "Description",
                    minWidth: 220,
                  },
                ],
                data: [
                  {
                    id: "condensate-drain",
                    name: { type: "addition", value: "Condensate Drain" },
                    description: {
                      type: "addition",
                      value: "Quarterly Maintenance",
                    },
                  },
                ],
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default App;
