import { colors, dummyData, months } from '../../constants/chartlabels';
import { theme } from '../../themes';

export const generateLineAreaChartData = (randomData: number[]) => {
  return {
    labels: months,
    datasets: [
      {
        fill: true,
        label: 'Line area',
        data: randomData,
        borderColor: theme.skyBlue,
        backgroundColor: theme.darkSkyBlue,
      },
    ],
  };
};

export const generateBubbleChartData = (numericData: number[], randomData: number[]) => {
  return {
    datasets: [
      {
        label: 'Red dataset',
        data: numericData.map((value, index) => ({
          x: value / 10,
          y: index,
          r: value / 20
        })),
        backgroundColor: theme.darkPink
      },
      {
        label: 'Blue dataset',
        data: randomData.map((value, index) => ({
          x: value / 10,
          y: index,
          r: value / 20
        })),
        backgroundColor: theme.darkSkyBlue
      },
    ],
  };
};

export const generateDoughnutChartData = (numericData: number[]) => {
  return {
    labels: colors,
    datasets: [
      {
        label: 'Doughnut',
        data: numericData,
        backgroundColor: [
          theme.darkPink,
          theme.darkSkyBlue,
          theme.darkYellow,
          theme.darkSkyBlue,
          theme.darkOrange,
          theme.darkCyan,
        ],
        borderColor: [
          theme.lightPink,
          theme.lightSkyBlue,
          theme.lightOrange,
          theme.lightSkyBlue,
          theme.lightCyan,
          theme.orange,
        ],
        borderWidth: 1,
      },
    ],
  };
};

export const generateHorizontalChartData = (numericData: number[], randomData: number[]) => {
  return {
    labels: months,
    datasets: [
      {
        label: 'Dataset 1',
        data: numericData,
        borderColor: theme.pink,
        backgroundColor: theme.darkPink,
      },
      {
        label: 'Dataset 2',
        data: randomData,
        borderColor: theme.skyBlue,
        backgroundColor: theme.darkSkyBlue,
      },
    ],
  };
};

export const generateLineChartData = (numericData: number[], randomData: number[]) => {
  return {
    labels: months,
    datasets: [
      {
        label: 'Dataset 1',
        data: numericData,
        borderColor: theme.pink,
        backgroundColor: theme.darkPink,
      },
      {
        label: 'Dataset 2',
        data: randomData,
        borderColor: theme.skyBlue,
        backgroundColor: theme.darkSkyBlue,
      },
    ],
  };
};

export const generateMultiChartData = (numericData: number[], randomData:number[]) => {
  return {
    labels: months,
    datasets: [
      {
        type: 'line' as const,
        label: 'Dataset 1',
        data: numericData,
        borderColor: theme.pink,
        borderWidth: 2,
        fill: false,
      },
      {
        type: 'bar' as const,
        label: 'Dataset 2',
        data: randomData,
        backgroundColor: theme.lightCyan,
        borderColor: 'white',
        borderWidth: 2,
      },
      {
        type: 'bar' as const,
        label: 'Dataset 3',
        data: numericData,
        backgroundColor: theme.skyBlue,
      },
    ],
  };
};

export const generatePieChartData = (randomData: number[]) => {
  return {
    labels: colors,
    datasets: [
      {
        label: 'Pie',
        data: randomData,
        backgroundColor: [
          theme.darkPink,
          theme.darkSkyBlue,
          theme.darkYellow,
          theme.darkSkyBlue,
          theme.darkOrange,
          theme.darkCyan,
        ],
        borderColor: [
          theme.lightPink,
          theme.lightSkyBlue,
          theme.lightOrange,
          theme.lightSkyBlue,
          theme.lightCyan,
          theme.orange,
        ],
        borderWidth: 1,
      }
    ],
  };
};

export const generatePolarChartData = (randomData: number[]) => {
  return {
    labels: colors,
    datasets: [
      {
        label: 'Polar',
        data: randomData,
        backgroundColor: [
          theme.darkPink,
          theme.darkSkyBlue,
          theme.darkYellow,
          theme.darkSkyBlue,
          theme.darkOrange,
          theme.darkCyan,
        ],
        borderWidth: 1,
      }
    ],
  };
};

export const generateRadarChartData = (randomData: number[]) => {
  return {
    labels: dummyData,
    datasets: [
      {
        label: 'Radar',
        data: randomData,
        borderColor: theme.pink,
        backgroundColor: theme.darkPink,
        borderWidth: 1,
      }
    ],
  };
};

export const generateScatterChartData = (randomData: number[]) => {
  return {
    datasets: [
      {
        label: 'Scatter',
        data: randomData.map((value, index) => ({
          x: value,
          y: index
        })),
        backgroundColor: theme.pink,
      }
    ],
  };
};

export const generateStackChartData = (numericData: number[], randomData: number[]) => {
  return {
    labels: months,
    datasets: [
      {
        label: 'Dataset 1',
        data:numericData,
        borderColor: theme.pink,
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 2',
        data: randomData,
        backgroundColor: theme.lightCyan,
        stack: 'Stack 0',
      },
      {
        label: 'Dataset 3',
        data: numericData,
        backgroundColor: theme.skyBlue,
        stack: 'Stack 1',
      },
    ],
  };
};

export const generateVerticalChartData = (numericData: number[], randomData: number[]) => {
  return {
    labels: months,
    datasets: [
      {
        label: 'Dataset 1',
        data: numericData,
        backgroundColor: theme.darkPink,
      },
      {
        label: 'Dataset 2',
        data: randomData,
        backgroundColor: theme.darkSkyBlue,
      },
    ],
  };
};