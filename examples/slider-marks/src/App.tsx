import { Slider } from "@servicetitan/anvil2/beta";

function App() {
  return (
    <Slider
      label="Project progress"
      defaultValue={75}
      step={25}
      formatValue={(value) => `${value}%`}
      marks={[0, 25, 50, 75, 100].map((value) => ({
        value,
        label: `${value}%`,
      }))}
      style={{ width: 320 }}
    />
  );
}

export default App;
