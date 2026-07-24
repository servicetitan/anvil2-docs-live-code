import { Button, Dialog } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <Dialog
      title="Save changes?"
      content="Save your changes before leaving this page."
      primaryAction={{ label: "Save" }}
      secondaryAction={{ label: "Discard" }}
      defaultOpen
      trigger={<Button label="Open dialog" />}
    />
  );
}

export default App;
