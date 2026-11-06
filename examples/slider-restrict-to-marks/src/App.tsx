import { Slider } from "@servicetitan/anvil2/beta";

function App() {
  return (
    <Slider
      label="Service radius"
      defaultValue={25}
      formatValue={(value) => `${value} mi`}
      marks={[0, 10, 25, 50, 100].map((value) => ({
        value,
        label: String(value),
      }))}
      restrictToMarks
      style={{ width: 320 }}
    />
  );
}

export default App;
