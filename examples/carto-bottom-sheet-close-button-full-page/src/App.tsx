import { BottomSheet, Button } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <BottomSheet
      title="Quick actions"
      content="Select an action to continue."
      showCloseButton={false}
      defaultOpen
      trigger={<Button label="Open sheet" variant="secondary" />}
    />
  );
}

export default App;
