import { Grid } from "@servicetitan/anvil2";
import { ColorSwatch } from "../components/ColorSwatch";
import { semanticForeground } from "../data/color-swatches";

function App() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="4">
      {semanticForeground.map((swatch) => (
        <ColorSwatch key={swatch.name} swatch={swatch} />
      ))}
    </Grid>
  );
}

export default App;
