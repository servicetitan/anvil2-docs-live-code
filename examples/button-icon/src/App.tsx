import { Button, Grid } from "@servicetitan/anvil2";
import FileUpload from "@servicetitan/anvil2/assets/icons/material/round/file_upload.svg";
import KeyboardArrowDown from "@servicetitan/anvil2/assets/icons/material/round/keyboard_arrow_down.svg";
import Edit from "@servicetitan/anvil2/assets/icons/material/round/edit.svg";

function App() {
  return (
    <Grid templateColumns="repeat(1, max-content)" gap="8" placeItems="center">
      <Button icon={{ before: FileUpload }}>Prefix Icon</Button>
      <Button icon={{ after: KeyboardArrowDown }}>Suffix Icon</Button>
      <Button icon={Edit} aria-label="edit" />
    </Grid>
  );
}

export default App;
