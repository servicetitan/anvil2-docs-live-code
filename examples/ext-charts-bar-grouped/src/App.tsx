import { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5xy from "@amcharts/amcharts5/xy";
import { ThemeCategorical } from "@servicetitan/anvil2-ext-charts/am5";

function App() {
  useLayoutEffect(() => {
    const data = [
      { year: "2021", europe: 2.5, namerica: 2.5, asia: 2.1, lamerica: 1.0 },
      { year: "2022", europe: 2.6, namerica: 2.7, asia: 2.2, lamerica: 0.5 },
      { year: "2023", europe: 2.8, namerica: 2.9, asia: 2.4, lamerica: 0.3 },
    ];

    const root = am5.Root.new("chartdiv");
    root.setThemes([am5themes_Animated.new(root), ThemeCategorical.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        paddingLeft: 0,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout,
      }),
    );

    // Legend
    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.p50,
        x: am5.p50,
      }),
    );

    // X axis with cell padding for grouped columns
    const xRenderer = am5xy.AxisRendererX.new(root, {
      cellStartLocation: 0.1,
      cellEndLocation: 0.9,
      minorGridEnabled: true,
    });
    xRenderer.grid.template.setAll({ location: 1 });

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      }),
    );
    xAxis.data.setAll(data);

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, { strokeOpacity: 0.1 }),
      }),
    );

    // Create one series per data group
    function makeSeries(name: string, fieldName: string) {
      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          categoryXField: "year",
        }),
      );

      series.columns.template.setAll({
        tooltipText: "{name}, {categoryX}: {valueY}",
        width: am5.percent(90),
        tooltipY: 0,
      });

      series.data.setAll(data);
      legend.data.push(series);
    }

    makeSeries("Europe", "europe");
    makeSeries("North America", "namerica");
    makeSeries("Asia", "asia");
    makeSeries("Latin America", "lamerica");

    return () => root.dispose();
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "500px" }} />;
}

export default App;
