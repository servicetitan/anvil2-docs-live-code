import {
  Chart,
  chartPalette,
  chartStepItemStyle,
  type EChartsOption,
} from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";

function App() {
  const appearance = "light" as const;
  const steps = chartPalette(appearance, "monochrome");

  const option: EChartsOption = {
    grid: { left: 48, right: 16, top: 24, bottom: 84 },
    legend: { bottom: 0 },
    xAxis: { type: "category", data: ["A", "B", "C", "D"] },
    yAxis: { type: "value" },
    series: [
      {
        type: "bar",
        name: "Highlight",
        data: [1200, 0, 0, 0],
        itemStyle: chartStepItemStyle(steps[3]!),
      },
      {
        type: "bar",
        name: "Rest",
        data: [0, 980, 1450, 1100],
      },
    ],
  };

  return (
    <Chart
      option={option}
      appearance={appearance}
      variant="categorical"
      width={480}
      height={300}
    />
  );
}

export default App;
