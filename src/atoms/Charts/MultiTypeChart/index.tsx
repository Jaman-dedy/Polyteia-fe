import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
import { Grid } from '@mui/material';
import { multilineChartOptions } from '../../../helpers/chartsCommonOptions';
import { months } from '../../../constants/chartlabels';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

export const data = {
  labels: months,
  datasets: [
    {
      type: 'line' as const,
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
    {
      type: 'bar' as const,
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar' as const,
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    },
  ],
};

export const MultiTypeChart = () => {
  return (
  <Grid sm={10} md={10} lg={12}>
     <Chart options={multilineChartOptions} type='bar' data={data} />
  </Grid>
 
  );
}