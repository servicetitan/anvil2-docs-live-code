import { Chart, type EChartsOption } from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";

function App() {
  const option: EChartsOption = {
    grid: { left: 96, right: 56, top: 24, bottom: 32 },
    xAxis: { type: "value" },
    yAxis: { type: "category", data: ["North", "South", "East", "West"] },
    series: [
      {
        type: "bar",
        data: [1200, 980, 1450, 1100],
        label: { show: true, position: "right" },
      },
    ],
  };

  return (
    <Chart option={option} variant="monochrome" width={560} height={300} />
  );
}

export default App;
