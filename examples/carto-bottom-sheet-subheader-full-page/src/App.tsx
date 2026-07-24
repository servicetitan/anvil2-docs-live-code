import { BottomSheet, Button } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <BottomSheet
      title="Job #48213"
      subheader="Scheduled for tomorrow at 9:00 AM"
      content="Review the job details before confirming the appointment."
      defaultOpen
      trigger={<Button label="Open sheet" variant="secondary" />}
    />
  );
}

export default App;
