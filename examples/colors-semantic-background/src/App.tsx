import { Grid } from "@servicetitan/anvil2";
import { ColorSwatch } from "../components/ColorSwatch";
import { semanticBackground } from "../data/color-swatches";

function App() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap="4">
      {semanticBackground.map((swatch) => (
        <ColorSwatch key={swatch.name} swatch={swatch} />
      ))}
    </Grid>
  );
}

export default App;
