import { Button, Dialog } from "@servicetitan/carto-react-kit";

function App() {
  return (
    <Dialog
      title="Leave without saving?"
      content="Your changes haven't been saved. Leaving now will discard them."
      primaryAction={{ label: "Leave" }}
      secondaryAction={{ label: "Stay" }}
      defaultOpen
      trigger={<Button label="Open dialog" />}
    />
  );
}

export default App;
