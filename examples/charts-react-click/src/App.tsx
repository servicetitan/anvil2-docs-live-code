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
    grid: { left: 48, right: 16, top: 24, bottom: 32 },
    xAxis: { type: "category", data: ["North", "South", "East", "West"] },
    yAxis: { type: "value" },
    series: [{ type: "bar", data: [1200, 980, 1450, 1100] }],
  };

  return (
    <CartoTheme>
      <Chart
        option={option}
        variant="monochrome"
        width={480}
        height={300}
        accessibilityLabel="Bar chart. Sales by region."
        onDataPointClick={({ name, points }) => setSelected({ name, points })}
      />
      <Text
        text={
          selected && point
            ? `${selected.name} · ${String(point.value)}`
            : "Click a bar, or Tab to the data table and press Enter, to report its category and value."
        }
      />
    </CartoTheme>
  );
}

export default App;
