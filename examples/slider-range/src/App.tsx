import { Slider } from "@servicetitan/anvil2/beta";

function App() {
  return (
    <Slider
      label="Pay range"
      range
      defaultValue={[18, 28]}
      min={15}
      max={60}
      formatValue={(value) => `$${value}`}
      showMinMaxLabels
      style={{ width: 320 }}
    />
  );
}

export default App;
