import {
  CartoTheme,
  GuidanceCard,
  type GuidanceChangeSection,
} from "@servicetitan/carto-react-kit";
import "@servicetitan/carto-react-kit/styles.css";

const changes: GuidanceChangeSection[] = [
  {
    type: "single",
    changes: [
      {
        id: "arrival-window",
        label: "Arrival window",
        from: "8–10 AM",
        to: "9–11 AM",
      },
    ],
  },
];

function App() {
  return (
    <CartoTheme>
      <div style={{ width: "48rem" }}>
        <GuidanceCard
          referenceLabel="Job #10428"
          changeSections={changes}
          onApply={() => {}}
          onEdit={() => {}}
          onDismiss={() => {}}
        />
      </div>
    </CartoTheme>
  );
}

export default App;
