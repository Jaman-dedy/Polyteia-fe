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
import { Grid } from '@mui/material';
import { stackedChartOptions } from '../../../helpers/chartsCommonOptions';
import { generateStackChartData } from '../../../helpers/chartDatasetsProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const data = generateStackChartData()

export const StackedBar = () => {
  return (
  <Grid sm={10} md={10} lg={12}>
     <Bar options={stackedChartOptions} data={data} />
  </Grid>
 
  );
}