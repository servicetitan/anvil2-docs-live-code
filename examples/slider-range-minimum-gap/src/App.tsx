import { Slider } from "@servicetitan/anvil2/beta";

const formatHour = (hour: number) =>
  `${hour % 12 || 12} ${hour < 12 ? "AM" : "PM"}`;

function App() {
  return (
    <Slider
      label="Arrival window"
      range
      defaultValue={[8, 12]}
      min={7}
      max={19}
      minStepsBetweenThumbs={2}
      formatValue={formatHour}
      description="Windows must be at least 2 hours."
      style={{ width: 320 }}
    />
  );
}

export default App;
