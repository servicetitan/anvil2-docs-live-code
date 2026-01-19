import { Text, Grid } from "@servicetitan/anvil2";

function App() {
  return (
    <Grid gap="6">
      <Text variant="body" size="medium">
        Body text with a <strong>bold styling</strong> applied to it.
      </Text>
      <Text variant="body" size="medium">
        Body text with a <i>italic styling</i> applied to it.
      </Text>
      <Text variant="body" size="medium">
        Body text with a{" "}
        <Text inline subdued>
          subdued styling
        </Text>{" "}
        applied to it.
      </Text>
    </Grid>
  );
}

export default App;
