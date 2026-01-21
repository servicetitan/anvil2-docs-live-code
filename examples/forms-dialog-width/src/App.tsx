import { Button, Dialog, Grid, TextField } from "@servicetitan/anvil2";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ minWidth: "35.5rem", minHeight: "20.5rem" }}>
      <Button onClick={() => setOpen(true)}>Open to show Dialog example</Button>
      <Dialog size="large" open={open} onClose={() => setOpen(false)}>
        <Dialog.Header>Partner Information</Dialog.Header>
        <Dialog.Content>
          <Grid gap="6" style={{ width: "100%" }}>
            <Grid gap="6" templateColumns="1fr 1fr">
              <TextField label="First Name" />
              <TextField label="Last Name" />
            </Grid>
            <TextField label="Email Address" />
          </Grid>
        </Dialog.Content>
        <Dialog.Footer>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button appearance="primary" onClick={() => setOpen(false)}>
            Save
          </Button>
        </Dialog.Footer>
      </Dialog>
    </div>
  );
}

export default App;
