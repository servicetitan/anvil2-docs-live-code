import { Slider } from "@servicetitan/anvil2/beta";

const tiers = ["Good", "Better", "Best"];

function App() {
  return (
    <Slider
      label="Equipment tier"
      defaultValue={1}
      min={0}
      max={2}
      formatValue={(value) => tiers[value]}
      marks={tiers.map((label, value) => ({ value, label }))}
      showValue={false}
      style={{ width: 320 }}
    />
  );
}

export default App;
