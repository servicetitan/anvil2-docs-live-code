import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5xy from "@amcharts/amcharts5/xy";
import { ThemeMonochrome } from "@servicetitan/anvil2-ext-charts/am5";

function App() {
  useLayoutEffect(() => {
    // Reverse data so highest values appear at the top
    const data = [
      { country: "USA", value: 2025 },
      { country: "China", value: 1882 },
      { country: "Japan", value: 1809 },
      { country: "Germany", value: 1322 },
      { country: "UK", value: 1122 },
    ].reverse();

    const root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root), ThemeMonochrome.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panY",
        wheelY: "zoomY",
        paddingLeft: 0,
        paddingRight: 1,
      }),
    );

    // Y axis (categories — swapped from vertical)
    const yRenderer = am5xy.AxisRendererY.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true,
    });
    yRenderer.grid.template.setAll({ location: 1 });

    const yAxis = chart.yAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: yRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      }),
    );
    yAxis.data.setAll(data);

    // X axis (values — swapped from vertical)
    const xAxis = chart.xAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererX.new(root, { strokeOpacity: 0.1 }),
      }),
    );

    // Series — uses categoryYField and valueXField for horizontal orientation
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueXField: "value",
        sequencedInterpolation: true,
        categoryYField: "country",
      }),
    );

    series.columns.template.setAll({
      tooltipText: "{categoryY}: {valueX}",
      tooltipY: am5.percent(90),
    });

    series.data.setAll(data);

    return () => root.dispose();
  }, []);

  return <div id="chartdiv" style={{ minWidth: "55rem", height: "500px" }} />;
}

export default App;
