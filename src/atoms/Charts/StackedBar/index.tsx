import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker'
import { Grid } from '@mui/material';
import { stackedChartOptions } from '../../../helpers/chartsCommonOptions';
import { months } from '../../../constants/chartlabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


export const data = {
  labels: months,
  datasets: [
    {
      label: 'Dataset 1',
      data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 2',
      data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 3',
      data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 1',
    },
  ],
};

export const StackedBar = () => {
  return (
  <Grid sm={10} md={10} lg={12}>
     <Bar options={stackedChartOptions} data={data} />
  </Grid>
 
  );
}