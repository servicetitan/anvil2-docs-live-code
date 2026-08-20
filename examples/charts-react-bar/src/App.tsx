import { Chart, type EChartsOption } from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";

function App() {
  const option: EChartsOption = {
    grid: { left: 48, right: 16, top: 24, bottom: 32 },
    xAxis: { type: "category", data: ["North", "South", "East", "West"] },
    yAxis: { type: "value" },
    series: [{ type: "bar", data: [1200, 980, 1450, 1100] }],
  };

  return (
    <Chart option={option} variant="monochrome" width={480} height={300} />
  );
}

export default App;
