import {
  Chart,
  chartPalette,
  chartStepItemStyle,
  type EChartsOption,
} from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";

function App() {
  const appearance = "light" as const;
  const palette = chartPalette(appearance, "semantic");

  const buckets = [
    { name: "Current", value: 83414.75, step: palette.success.primary },
    { name: "1–30 days", value: 83414.75, step: palette.warning.primary },
    { name: "31–60 days", value: 29440.5, step: palette.danger.tertiary },
    { name: "61–90 days", value: 18000, step: palette.danger.secondary },
    { name: "90+ days", value: 24000, step: palette.danger.primary },
  ];

  const option: EChartsOption = {
    grid: { left: 8, right: 8, top: 8, bottom: 84 },
    legend: { bottom: 0 },
    xAxis: { type: "value", show: false },
    yAxis: { type: "category", show: false, data: ["Unpaid"] },
    series: buckets.map(({ name, value, step }) => ({
      type: "bar" as const,
      name,
      stack: "total",
      data: [value],
      itemStyle: chartStepItemStyle(step),
    })),
  };

  return (
    <Chart
      option={option}
      appearance={appearance}
      variant="categorical"
      height={180}
      width={560}
    />
  );
}

export default App;
