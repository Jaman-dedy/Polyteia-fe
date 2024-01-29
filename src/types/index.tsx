export enum GraphType {
  PieChart = 'Pie Chart',
  DoughnutChart = "Doughnut Chart",
  PolarAreaChart = "Polar Area Chart",
  RadarChart = "Radar Chart",
  HorizontalBarChart = "Horizontal Bar Chart",
  StackedBar = "Stacked Bar Chart",
  LineChart = "Line Chart",
  AreaChart = "AreaChart",
  ScatterChart = "Scatter Chart",
  BubbleChart = "Bubble Chart",
  MultiTypeChart = "Multi Type Chart",
  VerticalBarChart = "Vertical Bar Chart"
}

export interface ChartOptions {
  responsive: boolean;
  plugins: {
    legend: {
      position: 'top';
    };
    title: {
      display: boolean;
      text?: string;
    };
  };
}