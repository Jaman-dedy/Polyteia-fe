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
import { verticalChartOptions } from '../../../helpers/chartsCommonOptions';
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
      data: months.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: months.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const VerticalBarChart = ()  => {
  return (
  <Grid sm={10} md={10} lg={12}>
     <Bar options={verticalChartOptions} data={data} />
  </Grid>
 
  );
}