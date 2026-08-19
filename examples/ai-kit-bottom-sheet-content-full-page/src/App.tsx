import { BottomSheet, Button, Checkbox } from "@servicetitan/anvil2-ai-kit";

function App() {
  return (
    <BottomSheet
      title="Filter jobs"
      content={
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Checkbox label="Show completed jobs" defaultSelected />
          <Checkbox label="Show cancelled jobs" />
          <Checkbox label="Only jobs scheduled today" />
        </div>
      }
      defaultOpen
      trigger={<Button label="Open sheet" variant="secondary" />}
    />
  );
}

export default App;
