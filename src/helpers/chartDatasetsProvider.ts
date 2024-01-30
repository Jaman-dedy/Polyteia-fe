import { faker } from '@faker-js/faker';
import { colors, dummyData, months } from '../constants/chartlabels';
import { theme } from '../themes';

export const generateLineAreaChartData = () => {
    return {
      labels: months,
      datasets: [
        {
          fill: true,
          label: 'Line area',
          data: months.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          borderColor: theme.skyBlue,
          backgroundColor: theme.darkSkyBlue,
        },
      ],
    };
  };

  export const generateBubbleChartData = () => {
    return {
      datasets: [
        {
          label: 'Red dataset',
          data: Array.from({ length: 50 }, () => ({
            x: faker.datatype.number({ min: -100, max: 100 }),
            y: faker.datatype.number({ min: -100, max: 100 }),
            r: faker.datatype.number({ min: 5, max: 20 }),
          })),
          backgroundColor: theme.darkPink
        },
        {
          label: 'Blue dataset',
          data: Array.from({ length: 50 }, () => ({
            x: faker.datatype.number({ min: -100, max: 100 }),
            y: faker.datatype.number({ min: -100, max: 100 }),
            r: faker.datatype.number({ min: 5, max: 20 }),
          })),
          backgroundColor: theme.darkSkyBlue
        },
      ],
    };
  };

  export const generateDoughnutChartData = () => {
    return {
      labels: colors,
      datasets: [
        {
          label: 'Doughnut',
          data: [12, 19, 3, 5, 2, 3],
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

  export const generateHorizontalChartData = () => {
    return {
      labels: months,
      datasets: [
        {
          label: 'Dataset 1',
          data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: theme.pink,
          backgroundColor: theme.darkPink,
        },
        {
          label: 'Dataset 2',
          data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: theme.skyBlue,
          backgroundColor: theme.darkSkyBlue,
        },
      ],
    };
  };

  export const generateLineChartData = () => {
    return {
      labels: months,
      datasets: [
        {
          label: 'Dataset 1',
          data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: theme.pink,
          backgroundColor: theme.darkPink,
        },
        {
          label: 'Dataset 2',
          data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: theme.skyBlue,
          backgroundColor: theme.darkSkyBlue,
        },
      ],
    };
  };

  export const generateMultiChartData = () => {
    return {
      labels: months,
      datasets: [
        {
          type: 'line' as const,
          label: 'Dataset 1',
          data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: theme.pink,
          borderWidth: 2,
          fill: false,
        },
        {
          type: 'bar' as const,
          label: 'Dataset 2',
          data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          backgroundColor: theme.lightCyan,
          borderColor: 'white',
          borderWidth: 2,
        },
        {
          type: 'bar' as const,
          label: 'Dataset 3',
          data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          backgroundColor: theme.skyBlue,
        },
      ],
    };
  };

  export const generatePieChartData = () => {
    return {
      labels: colors,
      datasets: [
        {
          label: 'Pie',
          data: [12, 19, 3, 5, 2, 3],
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

  export const generatePolarChartData = () => {
    return {
      labels: colors,
      datasets: [
        {
          label: 'Polar',
          data: [12, 19, 3, 5, 2, 3],
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

  export const generateRadarChartData = () => {
    return {
      labels: dummyData,
      datasets: [
        {
          label: 'Radar',
          data: [2, 9, 3, 5, 2, 3],
          borderColor: theme.pink,
          backgroundColor: theme.darkPink,
          borderWidth: 1,
        }
      ],
    };
  };

  export const generateScatterChartData = () => {
    return {
      datasets: [
        {
          label: 'Scatter',
          data: Array.from({ length: 100 }, () => ({
            x: faker.datatype.number({ min: -100, max: 100 }),
            y: faker.datatype.number({ min: -100, max: 100 }),
          })),
          backgroundColor: theme.pink,
        }
      ],
    };
  };

  export const generateStackChartData = () => {
    return {
      labels: months,
      datasets: [
        {
          label: 'Dataset 1',
          data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          borderColor: theme.pink,
          stack: 'Stack 0',
        },
        {
          label: 'Dataset 2',
          data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          backgroundColor: theme.lightCyan,
          stack: 'Stack 0',
        },
        {
          label: 'Dataset 3',
          data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          backgroundColor: theme.skyBlue,
          stack: 'Stack 1',
        },
      ],
    };
  };

  export const generateVerticalChartData = () => {
    return {
      labels: months,
      datasets: [
        {
          label: 'Dataset 1',
          data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          backgroundColor: theme.darkPink,
        },
        {
          label: 'Dataset 2',
          data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
          backgroundColor: theme.darkSkyBlue,
        },
      ],
    };
  };