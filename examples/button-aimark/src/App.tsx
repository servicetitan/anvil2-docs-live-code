import { Button, Grid } from "@servicetitan/anvil2";
import ArrowForwardIcon from "@servicetitan/anvil2/assets/icons/material/round/arrow_forward.svg";

function App() {
  return (
    <Grid templateColumns="repeat(2, max-content)" gap="6" placeItems="center">
      <Button appearance="primary" aiMark aria-label="AI draft estimate" />
      <Button appearance="primary" aiMark>
        Summarize Visit
      </Button>
      <Button
        appearance="secondary"
        aiMark="search"
        aria-label="Search similar jobs"
      />
      <Button
        appearance="secondary"
        aiMark="form"
        icon={{ after: ArrowForwardIcon }}
      >
        Autofill Work Order
      </Button>
    </Grid>
  );
}

export default App;
