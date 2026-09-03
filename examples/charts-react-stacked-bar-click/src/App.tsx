import {
  Chart,
  type ChartTooltipInfo,
  type EChartsOption,
} from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";
import { CartoTheme, Text } from "@servicetitan/anvil2-ai-kit";
// This file is most likely already in your workspace
import "@servicetitan/anvil2-ai-kit/styles.css";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState<ChartTooltipInfo | null>(null);
  const point = selected?.points[0];

  const option: EChartsOption = {
    grid: { left: 72, right: 16, top: 24, bottom: 84 },
    legend: { bottom: 0 },
    xAxis: { type: "value" },
    yAxis: { type: "category", data: ["North", "South", "East", "West"] },
    series: [
      {
        type: "bar",
        name: "Leads",
        stack: "total",
        data: [320, 332, 301, 334],
      },
      {
        type: "bar",
        name: "Booked",
        stack: "total",
        data: [220, 182, 191, 234],
      },
    ],
  };

  return (
    <CartoTheme>
      <Chart
        option={option}
        variant="monochrome"
        width={480}
        height={300}
        accessibilityLabel="Stacked bar. Funnel stages by region."
        onDataPointClick={({ name, points }) => setSelected({ name, points })}
      />
      <Text
        text={
          selected && point
            ? `${selected.name} · ${point.seriesName ?? "unnamed"} · ${String(point.value)}`
            : "Click a segment, or Tab to the data table and press Enter, to report its category and series."
        }
      />
    </CartoTheme>
  );
}

export default App;
