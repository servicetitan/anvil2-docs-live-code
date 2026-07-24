import { Button, Dialog, Text } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <Dialog
      title="View attachment"
      content={
        <Text text="Image preview would appear here. The dialog renders no footer — only the header's X to close." />
      }
      defaultOpen
      trigger={<Button label="View attachment" variant="secondary" />}
    />
  );
}

export default App;
