import { Slider } from "@servicetitan/anvil2/beta";

function App() {
  return (
    <Slider
      label="Markup"
      defaultValue={50}
      formatValue={(value) => `${value}%`}
      showTooltip
      style={{ width: 320 }}
    />
  );
}

export default App;
