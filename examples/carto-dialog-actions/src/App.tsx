import { Button, Dialog } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <Dialog
      title="You're all set"
      content="Your workspace is ready. You can invite teammates any time from Settings."
      primaryAction={{ label: "Got it" }}
      defaultOpen
      trigger={<Button label="Finish setup" />}
    />
  );
}

export default App;
