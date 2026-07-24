import { Button, Dialog } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <Dialog
      title="Delete project?"
      content="This permanently deletes the project and everything in it. This can't be undone."
      primaryAction={{ label: "Delete", variant: "danger" }}
      secondaryAction={{ label: "Cancel" }}
      defaultOpen
      trigger={<Button label="Delete project" variant="danger" />}
    />
  );
}

export default App;
