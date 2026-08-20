import { Chart, type EChartsOption } from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";

function App() {
  const option: EChartsOption = {
    grid: { left: 48, right: 16, top: 24, bottom: 84 },
    legend: { bottom: 0 },
    xAxis: { type: "category", data: ["Q1", "Q2", "Q3", "Q4"] },
    yAxis: { type: "value" },
    series: [
      { type: "bar", name: "North", data: [320, 332, 301, 334] },
      { type: "bar", name: "South", data: [220, 182, 191, 234] },
      { type: "bar", name: "East", data: [150, 232, 201, 154] },
    ],
  };

  return (
    <Chart option={option} variant="monochrome" width={480} height={320} />
  );
}

export default App;
