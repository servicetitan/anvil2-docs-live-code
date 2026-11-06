import { Slider } from "@servicetitan/anvil2/beta";

function App() {
  return (
    <Slider
      label="Discount"
      defaultValue={15}
      formatValue={(value) => `${value}%`}
      description="Applied to the invoice total before tax."
      showTooltip
      style={{ width: 320 }}
    />
  );
}

export default App;
