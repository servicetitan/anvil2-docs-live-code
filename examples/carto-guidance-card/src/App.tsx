import { GuidanceCard } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <div style={{ width: 530 }}>
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
