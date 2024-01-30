import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from '@faker-js/faker'
import { Grid } from '@mui/material';
import { lineChartOptions } from '../../../helpers/chartsCommonOptions';
import { months } from '../../../constants/chartlabels';
import { generateLineAreaChartData } from '../../../helpers/chartDatasetsProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// const data = {
//   labels: months,
//   datasets: [
//     {
//       fill: true,
//       label: 'Dataset 2',
//       data: months.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

const data = generateLineAreaChartData()

export const AreaChart = () => {
  return (
  <Grid sm={10} md={10} lg={12}>
    <Line options={lineChartOptions} data={data} />
  </Grid>
  
  );
}