import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5xy from "@amcharts/amcharts5/xy";
import { ThemeMonochrome } from "@servicetitan/anvil2-ext-charts/am5";

function App() {
  useLayoutEffect(() => {
    const data = [
      { country: "USA", value: 2025 },
      { country: "China", value: 1882 },
      { country: "Japan", value: 1809 },
      { country: "Germany", value: 1322 },
      { country: "UK", value: 1122 },
    ];

    const root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root), ThemeMonochrome.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        paddingLeft: 0,
        paddingRight: 1,
      }),
    );

    // X axis (categories)
    const xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 30,
      minorGridEnabled: true,
    });
    xRenderer.grid.template.setAll({ location: 1 });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      }),
    );
    xAxis.data.setAll(data);

    // Y axis (values)
    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, { strokeOpacity: 0.1 }),
      }),
    );

    // Series
    const series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "country",
      }),
    );

    series.columns.template.setAll({
      tooltipText: "{categoryX}: {valueY}",
      tooltipY: am5.percent(10),
    });

    series.data.setAll(data);

    return () => root.dispose();
  }, []);

  return <div id="chartdiv" style={{ minWidth: "55rem", height: "500px" }} />;
}

export default App;
