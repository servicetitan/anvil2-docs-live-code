import {
  Chart,
  type ChartTooltipInfo,
  type EChartsOption,
} from "@servicetitan/anvil2-charts-kit";
import "@servicetitan/anvil2-charts-kit/styles.css";
import { CartoTheme, Text, TooltipSurface } from "@servicetitan/anvil2-ai-kit";
// This file is most likely already in your workspace
import "@servicetitan/anvil2-ai-kit/styles.css";

function renderTooltip({ name, points }: ChartTooltipInfo) {
  return (
    <TooltipSurface
      content={
        <>
          <Text text={name} />
          {points.map((point) => (
            <Text
              key={point.seriesIndex}
              text={`${point.seriesName ? `${point.seriesName}: ` : ""}${String(point.value)}`}
            />
          ))}
        </>
      }
    />
  );
}

function App() {
  const option: EChartsOption = {
    grid: { left: 48, right: 16, top: 24, bottom: 84 },
    legend: { bottom: 0 },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: { type: "value" },
    series: [
      {
        type: "line",
        name: "Revenue",
        stack: "total",
        data: [320, 332, 301, 334, 390, 330],
        areaStyle: {},
      },
      {
        type: "line",
        name: "Costs",
        stack: "total",
        data: [220, 182, 191, 234, 290, 330],
        areaStyle: {},
      },
      {
        type: "line",
        name: "Profit",
        stack: "total",
        data: [150, 232, 201, 154, 190, 330],
        areaStyle: {},
      },
    ],
  };

  return (
    <CartoTheme>
      <Chart
        option={option}
        variant="monochrome"
        renderTooltip={renderTooltip}
        width={480}
        height={300}
      />
    </CartoTheme>
  );
}

export default App;
