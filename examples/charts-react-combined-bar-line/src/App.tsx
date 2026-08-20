import { Chart, type EChartsOption } from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";

function App() {
  const option: EChartsOption = {
    grid: { left: 48, right: 16, top: 24, bottom: 84 },
    legend: { bottom: 0 },
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: { type: "value" },
    series: [
      { type: "bar", name: "Actual", data: [820, 932, 901, 934, 1290, 1330] },
      {
        type: "line",
        name: "Target",
        data: [900, 950, 1000, 1050, 1100, 1200],
      },
    ],
  };

  return (
    <Chart option={option} variant="categorical" width={480} height={320} />
  );
}

export default App;
