import { Grid } from "@servicetitan/anvil2";
import { ColorSwatch } from "../components/ColorSwatch";
import { primitiveMagenta } from "../data/color-swatches";

function App() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap="4">
      {primitiveMagenta.map((swatch) => (
        <ColorSwatch key={swatch.name} swatch={swatch} />
      ))}
    </Grid>
  );
}

export default App;
