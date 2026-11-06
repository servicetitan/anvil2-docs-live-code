import { Slider } from "@servicetitan/anvil2/beta";

const quarters = ["Q1", "Q2", "Q3", "Q4"];

function App() {
  return (
    <Slider
      label="Forecast quarter"
      defaultValue={1}
      min={0}
      max={3}
      formatValue={(value) => quarters[value]}
      marks={quarters.map((label, value) => ({ value, label }))}
      showFill={false}
      showValue={false}
      style={{ width: 320 }}
    />
  );
}

export default App;
