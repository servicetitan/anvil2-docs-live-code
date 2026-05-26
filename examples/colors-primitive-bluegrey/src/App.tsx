import { Grid } from "@servicetitan/anvil2";
import { ColorSwatch } from "../components/ColorSwatch";
import { primitiveBlueGrey } from "../data/color-swatches";

function App() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap="4">
      {primitiveBlueGrey.map((swatch) => (
        <ColorSwatch key={swatch.name} swatch={swatch} />
      ))}
    </Grid>
  );
}

export default App;
