import { Chart, type EChartsOption } from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";

function App() {
  const data = [
    { name: "Organic", value: 48 },
    { name: "Paid", value: 32 },
    { name: "Referral", value: 14 },
    { name: "Other", value: 6 },
  ];
  const MIN_PERCENT = 20;
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const slices = data.map((d) => {
    const pct = (d.value / total) * 100;
    if (pct >= MIN_PERCENT) return d;
    return {
      ...d,
      label: { position: "outside" as const, formatter: "{b}\n{d}%" },
      labelLine: { show: true },
    };
  });

  const option: EChartsOption = {
    series: [
      {
        type: "pie",
        radius: ["35%", "55%"],
        data: slices,
        label: { show: true, position: "inside", formatter: "{d}%" },
        labelLine: { show: false },
      },
    ],
  };

  return (
    <Chart option={option} variant="monochrome" width={480} height={300} />
  );
}

export default App;
