import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
import { Grid } from '@mui/material';
import { lineChartOptions } from '../../../helpers/chartsCommonOptions';
import { months } from '../../../constants/chartlabels';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: months.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const LineChart = () => {
  return (
  <Grid sm={10} md={10} lg={12}>
    <Line options={lineChartOptions} data={data} />
  </Grid>
  
  );
}
